import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function linkClass({ isActive }) {
  return isActive
    ? 'block rounded-lg bg-primary px-3 py-2 font-bold text-background'
    : 'block rounded-lg px-3 py-2 hover:bg-background hover:text-primary';
}

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav
      id="menu"
      aria-label="Menu principal"
      className="rounded-xl border border-border bg-surface p-3
        md:col-span-2 xl:col-span-1 xl:row-span-3"
    >
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu-links"
        className="flex w-full items-center justify-between rounded-lg border border-border
          px-3 py-2 font-bold hover:border-primary xl:hidden"
      >
        Menu
        <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
      </button>

      <ul
        id="menu-links"
        className={`mt-3 flex-col gap-1 xl:mt-0 xl:flex ${isOpen ? 'flex' : 'hidden'}`}
      >
        <li>
          <NavLink to="/" end onClick={closeMenu} className={linkClass}>
            Painel
          </NavLink>
        </li>
        <li>
          <NavLink to="/lista" onClick={closeMenu} className={linkClass}>
            Meus jogos
          </NavLink>
        </li>
        <li>
          <NavLink to="/novo" onClick={closeMenu} className={linkClass}>
            Novo jogo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
