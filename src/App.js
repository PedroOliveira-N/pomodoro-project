import { useContext } from 'react';
import './App.css';
import { CronometroContext, CronometroProvider } from './context/CronometroContext';
import Timer from './components/Cronometro';

function CycleHistory () {
  const {cycles} = useContext(CronometroContext)

  return(
    <div>
      <h1>Histórico</h1>
      <ul>
       {cycles.map((cycle) => (
        <li key={cycle.id}>
          [{cycle.timeStamp}] - {cycle.type}
        </li>
       ))} 
      </ul>
    </div>
  )
}

function App() {
  return (
    <CronometroProvider>
      <div>
        <h1>Pomodoro com Context</h1>
        <Timer/>
        <CycleHistory/>
      </div>
    </CronometroProvider>
  );
}

export default App;
