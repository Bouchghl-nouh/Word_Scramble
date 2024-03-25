import Start from './pages/Start/Start' ;
import Play from './pages/Play/Play';
import Score from './pages/Score/Score' ;
import Error from './pages/Error/Error'
import { useGlobalContext } from '../Context';
function App() {
  const {GameState} = useGlobalContext();
  return (
    <>
    {GameState === "Start" &&   <Start />}
    {GameState === "Play" && <Play />}
    {GameState === "Score" && <Score />}
    {GameState === "Error" && <Error />}
    </>
  )
  
}

export default App
