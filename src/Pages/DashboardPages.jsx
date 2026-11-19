import { useState } from 'react';
import DetailsToggle from '../components/DatailsToggle';
import InfoRow from '../components/InfoRow';
import Panel from '../components/Panel';
import StatusBadge from '../components/StatusBadge';
import SummaryCard from '../components/SummaryCard';
import { transactions } from '../data/transactions';
import ListItem from '../components/ListItem';
import { Link } from 'react-router-dom';

const firstTransactions = transactions.slice(0, 3);

function DashboardPage() {
  const [showValues, setShowValues] = useState(false);
  const totalReceitas = transactions.reduce(
    (total, receitas) => total + receitas.amount,
    0,
  );

  const summaryCards = [
    {
      id: 'recipes',
      title: 'Receitas Totais',
      value: totalReceitas,
      icon: '💰',
    },
    { id: 'fixes expanses', title: 'Gastos Fixos', value: 318, icon: '🪙' },
    {
      id: '',
      title: 'Cartão de crédito',
      value: 676,
      icon: '💳 ',
      isHighlighted: true,
    },
  ];

  return (
    <>
      <Panel id="summary" title=" Entradas e saidas" className="md:col-span-2">
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
        {firstTransactions.length === 0 ? (
          <p className="text-muted">Nenhum jogo na lista ainda.</p>
        ) : (
          <ul>
            {firstTransactions.map((transaction) => (
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
        <Link to="/lista" className="mt-4 inline-block font-bold text-primary">
          ver todas as {transactions.length} receitas
        </Link>
      </Panel>
      <Panel
        id="chart"
        title="Crescimento do Patrimonio"
        className="md:min-h-80"
      >
        Crescimento do Patrimonio
      </Panel>
    </>
  );
}
export default DashboardPage;
