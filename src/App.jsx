import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ListPage from './Pages/ListPage';
import DashboardPage from './Pages/DashboardPages';
import NewItemPage from './Pages/NewItemPage';

function App() {

  return (
      <div className="flex min-h-screen flex-col bg-background text-foreground ">
        <Header />
          <main className="grid … xl:grid-cols-[15rem_1fr_1fr] xl:p-8">
            <Menu />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/novo" element={<NewItemPage />} />
              <Route path="/lista" element={<ListPage />} />

            </Routes>
          </main>

          <Footer />
      </div>
  );
}

export default App;
