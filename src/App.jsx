import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import SummaryCard from './components/SummaryCard';
import Panel from './components/Panel'
const areaClass =
  'min-h-32 rounded-xl border-2 border-dashed border-border bg-surface p-4 text-muted';
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main
          className="grid flex-1 grid-cols-1 content-start gap-4 p-4
      md:grid-cols-2 md:gap-6 md:p-6
      xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
        >
          <Menu />

          <Panel id="summary" title="Resumo" className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

              <SummaryCard title="Jogos" value={42} icon="🎮" />
              <SummaryCard title="Horas jogadas" value={318} icon="⏱️" />
              <SummaryCard title="Zerados" value={17} icon="🏆" isHighlighted />
              <SummaryCard title="Nota média" value="8,6" />
            </div>
          </Panel>

          <Panel id="list" title="List" className= "md:min-h-80">
            Lista
          </Panel>
          <Panel id="chart" title="Grafico" className= "md:min-h-80">
            Gráfico
          </Panel>
          <p>Painel em construção</p>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
