
 import Lives from '../Lives/Lives';
import Popup from '../Popup/Popup';
import { useGlobalContext } from '../../../Context';
import './Header.css' ;
const Header = () => {
  const {score} = useGlobalContext();
  return (
    <div className='Header-container'>
      <Popup height="30px" width="30px" />
      <Lives/>
      <div className="score-container">
        <p>Score :   <span>{score}</span></p> 
      
      </div>
    </div>
  )
}

export default Header