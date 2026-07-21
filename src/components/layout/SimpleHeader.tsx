import { List } from '@phosphor-icons/react';
import { useAuth } from '@/context/AuthContext';

interface SimpleHeaderProps {
  title: string;
  subtitle?: string;
}

const DRAWER_ID = 'main-drawer';

export function SimpleHeader({ title, subtitle }: SimpleHeaderProps) {
    const { logout } = useAuth();
  return (
<header className="flex flex-col gap-2">
<div className="flex justify-between items-center w-full">
  <div className="flex-none lg:hidden">
    <label
      htmlFor={DRAWER_ID}
      className="btn btn-square btn-ghost drawer-button"
      aria-label="Abrir menu"
    >
      <List size={24} />
    </label>
</div>

  <button
    className="btn btn-outline btn-sm ml-auto"
    onClick={logout}
  >
    Sair
  </button>
</div>
      
      <h1 className="text-base lg:text-4xl font-bold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm lg:text-base text-base-content/70">
          {subtitle}
        </p>
      )}
    </header>
  );
}
