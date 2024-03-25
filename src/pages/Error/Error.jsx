import './Error.css'
import Header from '../../components/Header/Header'
import { useGlobalContext } from '../../../Context'
const Error = () => {
    const {setGameState,setLife,setScore,setAnimation} = useGlobalContext();
    const handleHome = ()=>{
        setScore(0);
        setLife(3);
        setAnimation(true);
        setGameState('Start');
      }
  return (
    <>
    <Header/>
    <div className='Error-Content'>
        <h3>There is an Error !</h3>
  <button onClick={()=>{handleHome()}}>Home</button>
    </div>

  </>

)}
export default Error