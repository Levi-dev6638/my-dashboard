
function InvestmentItem({ title, category, date, amount }) {

  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR');

  return (
    <li className="flex flex-wrap items-center justify-between gap-3 rounded-lg px-2 py-4 transition-colors hover:bg-surface/70">

      <div className="flex flex-col gap-1">
        <p className="font-semibold text-foreground">
          {title}
        </p>

        <p className="text-sm text-muted">
          {category}
        </p>

        <p className="text-xs text-muted">
          {formattedDate}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="font-bold text-base text-success">
          {formattedAmount}
        </p>

        <span className="text-xs text-muted">
          Aporte realizado
        </span>
      </div>

    </li>
  );
}

export default InvestmentItem;
