import { Link } from "react-router-dom";
import Header from "../components/Header";
import Timer from "../components/Cronometro";

export default function PomodoroPage () {
    return(
        <div className="PomoroPage">
            <Header/>
            <Timer/>
            <div className="nav-links">
                <nav>
                    <Link to="/"><button className='botao-link'>Início</button></Link>
                    <Link to="/historico"><button className='botao-link'>Histórico</button></Link>
                </nav>
            </div>
        </div>
    )
}