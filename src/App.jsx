import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import SummaryCard from './components/SummaryCard';
import Panel from './components/Panel';
import InfoRow from './components/InfoRow';
import StatusBadge from './components/StatusBadge';
import DetailsToggle from './components/DatailsToggle';
import { useState } from 'react';
import ListItem from './components/ListItem';
import {transactions} from './data/transactions.js'

const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'Despesas', label: 'Despesas' },
  { id: 'Receitas', label: 'Receitas' },
];




function App() {
  const [showValues, setShowValues] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const searchTerm = search.trim().toLowerCase();
  const totalReceitas = transactions.reduce((total, receitas) => total + receitas.amount, 0)
 

  const summaryCards = [
  { id: 'recipes', title: 'Receitas Totais', value: totalReceitas , icon: '💰' },
  { id: 'fixes expanses', title: 'Gastos Fixos', value: 318, icon: '🪙' },
  {
    id: '',
    title: 'Cartão de crédito',
    value: 676,
    icon: '💳 ',
    isHighlighted: true,
  },
];

  const visibleTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title.toLowerCase().includes(searchTerm);
    if (statusFilter === 'Receitas') return transaction.state && matchesSearch;
    if (statusFilter === 'Despesas') return !transaction.state && matchesSearch;
    return matchesSearch;
  });

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground ">
        <Header />
        <main
          className="grid flex-1 grid-cols-1 content-start gap-4 p-4
      md:grid-cols-2 md:gap-6 md:p-6
      xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
        >
          <Menu />

          <Panel
            id="summary"
            title=" Entradas e saidas"
            className="md:col-span-2"
          >
            <button onClick={() => setShowValues(!showValues)}>
              {!showValues ? 'mostrar' : 'Esconder'}
            </button>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <div className="col-span-2 md:col-span-1">
                <SummaryCard
                  title={summaryCards[0].title}
                  value={summaryCards[0].value}
                  hideValue={!showValues}
                />
              </div>

              {summaryCards
                .filter((_, i) => i > 0)
                .map((card) => (
                  <SummaryCard
                    key={card.id}
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    isHighlighted={card.isHighlighted}
                    hideValue={!showValues}
                  />
                ))}
            </div>
          </Panel>
          <Panel id=" highlight" title="Valor atual" className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-heading text-xl font-bold">Hollow Knight</h3>
              <StatusBadge label="Jogando" isActive />
              <StatusBadge label="Single player" />
            </div>
            <p className="mt-1 text-muted"> Salario recebido todos os meses</p>
            <div className="mt-4 grid gap-x-6 md:grid-cols-2">
              <InfoRow label="Plataforma" value="PC" />
              <InfoRow label="Gênero" value="Metroidvania" />
              <InfoRow label="Horas jogadas" value="38 h" />
              <InfoRow label="Progresso" value="72%" />
            </div>
            <DetailsToggle>
              <p>Falta o último chefe e 3 áreas do mapa.</p>
            </DetailsToggle>
          </Panel>

          <Panel id="list" title="Extrato" className="md:min-h-80">
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

          <Panel
            id="chart"
            title="Crescimento do Patrimonio"
            className="md:min-h-80"
          >
            Crescimento do Patrimonio
          </Panel>
          <p>Painel em construção</p>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
