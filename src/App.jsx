import './App.css'
import Buttons from './components/Buttons'
import usePomodoroClock from './hooks/usePomodoroClock'
import Clock from './components/Clock'

function App() {
  const { start, pause, restart, status, time } = usePomodoroClock()

  return (
    <div className="App">
      <Clock time={time} />
      <Buttons start={start} pause={pause} restart={restart} status={status} />
    </div>
  )
}

export default App
