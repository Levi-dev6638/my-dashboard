import { useState } from 'react'

function DetailsToggle({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDetails() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={toggleDetails}
        aria-expanded={isOpen}
        className="rounded-lg border border-border px-3 py-2
          text-sm font-bold hover:border-primary hover:text-primary focus:text-primary"
      >
        {isOpen ? 'Ocultar detalhes' : 'Ver detalhes'}
      </button>
      {isOpen && <div className="mt-3 text-muted">{children}</div>}
    </div>
  )
}

export default DetailsToggle

