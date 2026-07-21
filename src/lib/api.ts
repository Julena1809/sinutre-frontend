// Cliente HTTP para o frontend (SiNutre)
import axios from 'axios';

// 1. Define a URL base com fallback para localhost caso a variável VITE_API_URL não exista
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

// 2. Instância do Axios
export const api = axios.create({
  baseURL: API_URL,
});

const TOKEN_KEY = 'sinutre.token';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

// 3. Interceptor do Axios para injetar o Bearer Token automaticamente
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Wrapper para requisições usando Fetch nativo.
 * Garante barras corretas na URL e converte erros 4xx/5xx em exceções.
 */
export async function apiFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const token = getToken();

  // Trata barras duplas ou ausentes entre a URL base e o path
  const normalizedBase = API_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${normalizedBase}${normalizedPath}`;

  const res = await fetch(fullUrl, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }

  return res.json() as Promise<T>;
}
