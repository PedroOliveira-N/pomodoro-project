import './App.css';
import { CronometroProvider } from './context/CronometroContext';
import HomePage from './pages/HomePage';
import PomodoroPage from './pages/PomodoroPage';
import HistoricoPage from './pages/HistoricoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <CronometroProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/historico" element={<HistoricoPage />} />
        </Routes>
      </BrowserRouter>
    </CronometroProvider>
  );
}

export default App;
