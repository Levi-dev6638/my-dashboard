import { useState } from 'react';

const linkClass =
  'block rouded-lg px-3 py-2 hover:bg-background hover:text-primary';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
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
          <a href="#summary" onClick={closeMenu} className={linkClass}>
            Resumo
          </a>
        </li>
        {/* + Lista (#list) e Gráfico (#chart), iguais */}
      </ul>
    </>
  );
}
export default Menu;
