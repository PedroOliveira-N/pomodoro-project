# Pomodoro Project

Um timer Pomodoro simples em React que alterna entre modos de foco e descanso, registra o histórico de ciclos e mantém o estado mesmo ao navegar entre páginas.

---

##  Funcionalidades

-  Alternância entre período de trabalho e descanso.
-  Contagem regressiva visível de minutos e segundos.
-  Histórico dos ciclos iniciados (com timestamp e tipo de período).
-  Estado persistente via Context API (compartilhado entre páginas).
-  Navegação suave entre o cronômetro e histórico sem resetar o estado.

---

##  Tecnologias

- **React** — estrutura da interface.
- **React Router** — navegação entre páginas.
- **Context API** — gerenciamento global de estado (`CronometroContext`).

---

##  Instalação e Execução

1. Clone o repositório:
  ```bash
   git clone https://github.com/PedroOliveira-N/pomodoro-project.git
```

2. Navegue até a pasta do projeto:
  ```bash
cd pomodoro-project
```

3. Instale as dependências:
  ```bash
npm install
```

4. Execute o projeto no servidor de desenvolvimento:
  ```bash
npm start
```

---

## Estrutura do Projeto
pomodoro-project/
├── src/
│   ├── context/
│   │   └── CronometroContext.js
│   ├── pages/
│   │   ├── HomePage.js
|   |   ├── PomodoroPage.js
│   │   └── HistoricoPage.js
|   ├── fonts/
|   |   └── Sunkeissed.ttf
│   ├── components/
|   |   ├── Cronometro.js
│   │   └── Header.js 
│   ├── App.js  
|   ├── App.css
│   └── index.js
└──

## Acesse o Projeto On-line

[Pomodoro-Project]()
