import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import SummaryCard from './components/SummaryCard';
import Panel from './components/Panel';
import InfoRow from './components/InfoRow';
const areaClass =
  'min-h-32 rounded-xl border-2 border-dashed border-border bg-surface p-4 text-muted';
function App() {
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <SummaryCard title="Receitas Totais" value={42} />
              <SummaryCard title="Horas jogadas" value={318} icon="⏱️" />
              <SummaryCard title="Zerados" value={17} icon="🏆" isHighlighted />
              <SummaryCard title="Nota média" value="8,6" />
            </div>
          </Panel>
          <Panel id=" highlight" title="Valor atual" className="md:col-span-2">
            <h3 className="font-heading text-xl font-bold">Sálario</h3>
            <p className="mt-1 text-muted">
              {' '}
              Sálario base recebido todo dia primeiro
            </p>
            <div className="mt-4 grid gap-x-6 md:grid-cols-2">
              <InfoRow label="Plataforma" value="PC" />
              <InfoRow label="Gênero" value="Metroidvania" />
              <InfoRow label="Horas jogadas" value="38 h" />
              <InfoRow label="Progresso" value="72%" />
            </div>
          </Panel>
          <Panel id="list" title="Maiores gastos" className="md:min-h-80">
            Maiores gastos
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
