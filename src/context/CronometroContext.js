import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const CronometroContext = createContext();

export function CronometroProvider({ children }) {
  const [cycles, setCycles] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const [isBreak, setIsBreak] = useState(true);

  const startCycle = () => {
    const newCycle = {
      id: uuidv4(),
      type: isBreak ? "Pausa" : "Trabalho",
      timeStamp: new Date().toLocaleTimeString(),
    };

    setCycles((prev) => [newCycle, ...prev]);
    setIsRunning(true);
  };

  const stopCycle = () => {
    setIsRunning(false);
    setIsBreak((prev) => !prev);
    setSecondsLeft(isBreak ? 25 * 60 : 5 * 60);
  };

  // 🔥 Timer controlado pelo Context
  useEffect(() => {
    let timer = null;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && secondsLeft === 0) {
      stopCycle();
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  return (
    <CronometroContext.Provider
      value={{
        cycles,
        isRunning,
        isBreak,
        secondsLeft,
        setSecondsLeft,
        startCycle,
        stopCycle,
      }}
    >
      {children}
    </CronometroContext.Provider>
  );
}


