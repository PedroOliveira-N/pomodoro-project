import { useContext, useEffect } from "react"
import { CronometroContext } from "../context/CronometroContext"

export default function  Timer () {

    const {
        cycles,
        isRunning,
        isBreak,
        secondsLeft,
        setSecondsLeft,
        startCycle,
        stopCycle,
    } = useContext(CronometroContext);

    useEffect (() => {
        let timer = null;
        if (isRunning && secondsLeft > 0) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000)
        } else if (isRunning && secondsLeft === 0) {
            stopCycle()
        }

        return () => clearInterval(timer)
    }, [isRunning , secondsLeft]);

    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0")

    const seconds = String(secondsLeft % 60).padStart(2 , "0")

    return(
        <div>

            <h1>{isBreak ? "Hora do Descanso" : "Modo Foco"}</h1>
            <h2>{minutes}:{seconds}</h2>
                {!isRunning ? (
                <>
                    <button onClick={startCycle}>Iniciar</button>
                    <button disabled>Parar</button>
                </>
                ) : (
                <>
                    <button disabled>Iniciar</button>
                    <button onClick={stopCycle}>Parar</button>
                </>
                )}
        </div>
    )
}

