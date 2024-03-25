
import './Start.css'
import {useGlobalContext} from '../../../Context'
import {  FaCirclePlay } from "react-icons/fa6";
import Popup from '../../components/Popup/Popup'
const Start = () => {
  const {setGameState} = useGlobalContext();
  return (
    <div className='Start'>
    <div className='Start-container'>
      <h1>Word Scramble</h1>
      <p>Can you beat the clock by unscrambling the </p>
      <p>letters to spell the word?</p>
      <div className="Popup-container">
      <Popup text = "How to Play" width = "50px" height = "50px" />
      </div>
     
      <button className='Start-Playing' onClick={()=>setGameState("Play")}>
      <FaCirclePlay  style={{color :"black",height:"65px" ,width:"65px" ,cursor:"pointer"}}/>
      </button>
     
      </div>
      </div>
  )
}

export default Start