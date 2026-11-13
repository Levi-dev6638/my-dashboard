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

const summaryCards = [
  { id: 'recipes', title: 'Receitas Totais', value: 2167, icon: '💰' },
  { id: 'fixes expanses', title: 'Gastos Fixos', value: 318, icon: '🪙' },
  {
    id: '',
    title: 'Cartão de crédito',
    value: 676,
    icon: '💳 ',
    isHighlighted: true,
  },
];

const transactions = [
  {
    id: 'salary',
    title: 'Salário',
    amount: 3500,
    type: 'income',
    date: '2026-11-05',
  },
  {
    id: 'freelance',
    title: 'Projeto Freelancer',
    amount: 850,
    type: 'income',
    date: '2026-11-08',
  },
  {
    id: 'rent',
    title: 'Aluguel',
    amount: 1200,
    type: 'expense',
    date: '2026-11-10',
  },
  {
    id: 'groceries',
    title: 'Supermercado',
    amount: 450,
    type: 'expense',
    date: '2026-11-11',
  },
  {
    id: 'internet',
    title: 'Internet',
    amount: 100,
    type: 'expense',
    date: '2026-11-12',
  },
  {
    id: 'cinema',
    title: 'Cinema',
    amount: 65,
    type: 'expense',
    date: '2026-11-12',
  },
];
function App() {
  const [showValues, setShowValues] = useState(false);

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
            <ul>
              {transactions.map((transaction) => (
                <ListItem key={transaction.id} title={transaction.title} category={transaction.category}   date={transaction.date}  type={transaction.type}  amount={transaction.amount} />
              ))}
            </ul>
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
