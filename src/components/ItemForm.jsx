import { useState } from 'react';
import { Link } from 'react-router-dom';

const inputClass =
  'mt-1 w-full rounded-lg border bg-background px-3 py-2 focus:border-primary focus:outline-none';

function ItemForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState({
    title: null,
    hours: null
  });

  function validate() {
    const newErrors = {};
    if (title.trim() === '') {
      newErrors.title = 'Informe o nome do jogo.';
    } else if (title.trim().length < 2) {
      newErrors.title = 'O nome precisa de pelo menos 2 letras.';
    }
    if (hours === '') {
      newErrors.hours = 'Informe as horas jogadas.';
    } else if (Number(hours) < 0) {
      newErrors.hours = 'As horas não podem ser negativas.';
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (newErrors.title || newErrors.hours) return;
    onSave({
      title: title.trim(),
      hours: Number(hours),
      isCompleted: isCompleted,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-xl">
      <div>
        <label htmlFor="game-title" className="font-bold">
          Nome do jogo
        </label>
        <input
          id="game-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'game-title-error' : undefined}
          className={`${inputClass} ${errors.title ? 'border-danger' : 'border-border'}`}
        />
        {errors.title && (
          <p id="game-title-error" className="mt-1 text-sm text-danger">
            {errors.title}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="game-hours" className="font-bold">
          Horas jogadas
        </label>
        <input
          id="game-hours"
          type="number"
          value={hours}
          onChange={(event) => setHours(event.target.value)}
          aria-invalid={Boolean(errors.hours)}
          aria-describedby={errors.hours ? 'game-hours-error' : undefined}
          className={`${inputClass} ${errors.hours ? 'border-danger' : 'border-border'}`}
        />
        {errors.hours && (
          <p id="game-hours-error" className="mt-1 text-sm text-danger">
            {errors.hours}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          id="game-completed"
          type="checkbox"
          checked={isCompleted}
          onChange={(event) => setIsCompleted(event.target.checked)}
          className="size-5 accent-primary"
        />
        <label htmlFor="game-completed">Já zerei este jogo</label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 font-bold text-background hover:opacity-90"
        >
          Salvar
        </button>
        <Link to="/lista" className="text-muted hover:text-primary">
          Cancelar
        </Link>
      </div>
    </form>
  );
}

export default ItemForm;
