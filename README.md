<<<<<<< HEAD
# Nutridash

Dashboard de nutrição em React, convertido a partir do protótipo HTML original
em `../Nutridash`. Toda a estilização foi migrada para Tailwind CSS (com daisyUI
v5 como plugin) e a UI foi quebrada em componentes reutilizáveis.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- daisyUI v5 (plugin do Tailwind)
- @phosphor-icons/react para os ícones
- ESLint 9 (flat config) + typescript-eslint

## Estrutura

```
src/
├── components/
│   ├── cards/      # AddMealCard, TotalMealsCard
│   ├── forms/      # FormField
│   ├── layout/     # Sidebar, SidebarBrand, SidebarItem, Header
│   ├── macros/     # MacroStat, MacroStatsBar
│   ├── meals/      # MealActionButton, MealFab, MealsList/Table…
│   └── modal/      # AddMealModal e suas sub-partes
├── constants/      # MEAL_CATEGORIES, NAV_ITEMS
├── data/           # mocks de usuário, macros e refeições
├── hooks/          # useMealModal
├── pages/          # DashboardPage
├── styles/         # tailwind + tema sinutre
├── types/          # tipos de domínio
├── App.tsx
└── main.tsx
```

## Scripts

```bash
npm install     # instala dependências
npm run dev     # servidor de desenvolvimento (vite)
npm run build   # build de produção (tsc -b + vite build)
npm run lint    # ESLint em todo o projeto
npm run preview # preview do build
```

## Tema

O tema customizado `sinutre` (paleta verde) está definido em
`src/styles/theme.css` usando a sintaxe `@plugin 'daisyui/theme'` do daisyUI v5.
=======
# Histórico de Desenvolvimento e Estado Atual do Projeto

O projeto SiNutre foi iniciado a partir do MVP disponibilizado no curso de Formação em Desenvolvimento Web Moderno. A primeira etapa de desenvolvimento teve como objetivo compreender a estrutura existente do backend, configurar o ambiente local, executar a aplicação e preparar o projeto para receber novas funcionalidades conforme os requisitos complementares propostos.

Inicialmente foi realizada a configuração do ambiente de desenvolvimento utilizando Node.js, TypeScript, Express, Prisma ORM e SQLite. Também foi realizada a organização do projeto para execução local através do comando `npm run dev`, garantindo que o backend estivesse funcionando corretamente em ambiente de desenvolvimento.

Durante a análise do código existente, foi identificado que o módulo de alimentos já possuía a estrutura inicial para cadastro e consulta de alimentos. A partir dessa base, foram implementadas melhorias no gerenciamento dos alimentos cadastrados pelo usuário autenticado.

As alterações realizadas até o momento foram:

* Implementação da funcionalidade de atualização de alimentos cadastrados, permitindo alterar informações como nome do alimento, calorias, carboidratos, proteínas e gorduras.
* Implementação da funcionalidade de exclusão de alimentos cadastrados, permitindo remover registros existentes associados ao usuário autenticado.
* Manutenção da funcionalidade original de cadastro de alimentos através do método POST, preservando a estrutura inicial do MVP.
* Manutenção da funcionalidade de listagem de alimentos através do método GET, incluindo busca por nome e ordenação dos registros.
* Organização e versionamento das alterações utilizando Git, com commits descritivos e envio das atualizações para o repositório público do GitHub.

Até o momento, o backend contempla as operações principais de gerenciamento de alimentos (CRUD parcial), possuindo as seguintes operações disponíveis:

* GET `/foods` - Listagem e pesquisa de alimentos cadastrados.
* POST `/foods` - Cadastro de novos alimentos.
* PUT `/foods/:id` - Atualização de alimentos existentes.
* DELETE `/foods/:id` - Exclusão de alimentos cadastrados.

Validação dos dados de alimentos no cadastro e alteração:

* Verificar preenchimento dos campos obrigatórios;
* Validar tipos de dados recebidos;
* Impedir valores inválidos para informações nutricionais;
* Retornar mensagens de erro adequadas ao usuário.

## Próximas etapas de desenvolvimento

Para conclusão do projeto e atendimento aos requisitos complementares da atividade, serão implementadas as seguintes funcionalidades:

1. Cadastro e gerenciamento dos dados complementares do usuário:

* Implementar cadastro de informações como peso, altura, meta calórica diária e nível de atividade física;
* Armazenar essas informações no banco de dados;
* Criar funcionalidade de alteração desses dados.

2. Implementação do dashboard nutricional:

* Exibir a meta calórica diária cadastrada pelo usuário;
* Comparar consumo atual com a meta estabelecida;
* Sinalizar quando a meta diária for ultrapassada.

3. Criação da página de métricas:

* Implementar cálculo do IMC do usuário;
* Exibir classificação do IMC conforme faixas estabelecidas;
* Calcular média calórica consumida nos últimos sete dias;
* Comparar a média de consumo com a meta definida.

4. Melhorias na experiência do usuário:

* Implementar funcionalidade de logout;
* Realizar ajustes visuais na interface;
* Melhorar mensagens de validação e tratamento de erros.

5. Publicação do projeto:

* Disponibilizar o backend em ambiente de produção utilizando Railway;
* Disponibilizar o frontend utilizando Vercel;
* Atualizar este README com os links de acesso da aplicação publicada e com a descrição final das funcionalidades implementadas.

O projeto encontra-se atualmente com a estrutura inicial consolidada, backend funcional e preparado para evolução das próximas funcionalidades previstas nos requisitos complementares.
>>>>>>> 0aba8ebcc798ed7dd1e7763541a197b967cc2bf4
