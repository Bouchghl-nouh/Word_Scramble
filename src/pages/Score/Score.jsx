import './Score.css'
import Header from '../../components/Header/Header'

import { useGlobalContext } from '../../../Context'

const Score = () => {
  const {setGameState,setLife,setScore,setAnimation} = useGlobalContext();
  const handleHome = ()=>{
    setScore(0);
    setLife(3);
    setAnimation(true);
    setGameState('Start');
  }
  const handlePlay = ()=> {
    setScore(0);
    setLife(3);
    setAnimation(true);
    setGameState('Play');
  }
  return (
   <>
      <Header />
      <div className='Score-Content'>
    <button onClick={()=>{handleHome()}}>Home</button>
    <button onClick={()=>{handlePlay()}}>Play Again</button>
      </div>

    </>

  )
}

export default Score