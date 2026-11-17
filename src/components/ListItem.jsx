import StatusBadge from "./StatusBadge";
function ListItem({ title, category, date, type, amount ,isFinally = false}) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-3 py-4 px-2 transition-colors hover:bg-surface/70 rounded-lg">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-foreground">
          {isFinally && <span aria-hidden="true">🏆</span>}
          {title}</p>

        <p className="text-sm text-muted">
          {category}{isFinally ? 'até zerar' : 'jogadas até agora'}
          </p>

        <p className="text-xs text-muted">{date}</p>
      </div>
       <StatusBadge label={isFinally ? 'receitas' : 'gastos'} isActive={!isFinally} />
      <p
        className={`font-bold text-base ${
          type === 'income' ? 'text-success' : 'text-danger'
        }`}
      >
        {type === 'income' ? '+' : '-'} R$ {amount}
      </p>
    </li>
  );
}
export default ListItem;
