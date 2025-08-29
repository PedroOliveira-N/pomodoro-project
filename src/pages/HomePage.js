import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage () {
    return(
        <div className="HomePage">
            <Header/>

            <div className="home-texto">
                <br/>
                <p>Olá! <br/>Este é um projeto criado por Pedro Oliveira, nele é disposto uma espécie de pomodoro com as funcionalidades de histórico e manuseamento da contagem de tempo.</p>

                <p>Pomodoro é uma técnica de gestão de tempo, ela consiste em dividir o trabalho em blocos de tempo de 25 minutos, chamados “pomodoros”, separados por pequenos intervalos de 5 minutos.</p>

                <p>Este projeto utiliza e tem como tecnologias: Estado Global com React Context, Componentes e Fonte Personalizada, estilização em CSS3 e React-Router-DOM. </p>
            </div>

            <div className="nav-links">
                <nav>
                    <Link to="/historico"><button className='botao-link'>Histórico</button></Link>
                    <Link to="/pomodoro"><button className='botao-link'>Pomodoro</button></Link>
                </nav>
            </div>
        </div>
    )
}