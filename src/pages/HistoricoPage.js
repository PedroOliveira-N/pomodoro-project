import { useContext } from "react";
import Header from "../components/Header";
import { CronometroContext } from "../context/CronometroContext";

export default function HistoricoPage () {

    function CycleHistory () {
        const {cycles} = useContext(CronometroContext)

        return(
            <div>
                <h1>Histórico</h1>
                <ul>
                    {cycles.map((cycle) => (
                        <p key={cycle.id} className="home-texto">
                            [{cycle.timeStamp}] - {cycle.type}
                        </p>
                    ))} 
                </ul>
            </div>
  )
    }

    return(
        <div className="HistoricoPage">
            <Header />
            <CycleHistory />
            <div className="nav-links">
                <nav>
                    <a href="/"><button className='botao-link'>Início</button></a>
                    <a href="/pomodoro"><button className='botao-link'>Pomodoro</button></a>
                </nav>
            </div>
        </div>
    )
}