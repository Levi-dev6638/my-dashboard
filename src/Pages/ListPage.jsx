import { useState } from 'react';
import Panel from '../components/Panel';
import ListItem from '../components/ListItem';
import { useFinances } from '../context/FinancesContext'


function ListPage() {
  const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'Despesas', label: 'Despesas' },
    { id: 'Receitas', label: 'Receitas' },
  ];
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const searchTerm = search.trim().toLowerCase();
  const { transactions } = useFinances()



  const visibleTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title.toLowerCase().includes(searchTerm);
    if (statusFilter === 'Receitas') return transaction.state && matchesSearch;
    if (statusFilter === 'Despesas') return !transaction.state && matchesSearch;
    return matchesSearch;
  });
  return (
      <Panel id="list" title="Extrato" className="md:min-h-80 md:col-span-2">
        <label htmlFor="game-search" className="text-sm text-muted">
          Buscar pelo nome
        </label>
        <input
          id="game-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ex.: hades"
          className="mt-1 mb-3 w-full rounded-lg border border-border bg-background
    px-3 py-2 focus:border-primary focus:outline-none"
        />
        <div className="mb-4 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setStatusFilter(option.id)}
              aria-pressed={statusFilter === option.id}
              className={
                statusFilter === option.id
                  ? 'rounded-full border border-primary bg-primary px-3 py-1 text-sm font-bold text-background'
                  : 'rounded-full border border-border px-3 py-1 text-sm font-bold text-muted hover:border-primary'
              }
            >
              {option.label}
            </button>
          ))}
        </div>
        {visibleTransactions.length === 0 ? (
          <p className="text-muted">Nenhum jogo na lista ainda.</p>
        ) : (
          <ul>
            {visibleTransactions.map((transaction) => (
              <ListItem
                key={transaction.id}
                title={transaction.title}
                category={transaction.category}
                date={transaction.date}
                type={transaction.type}
                amount={transaction.amount}
                isFinally={transaction.state}
              />
            ))}
          </ul>
        )}
      </Panel>
  );
}
export default ListPage;
