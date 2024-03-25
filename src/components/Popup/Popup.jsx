import { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import './Popup.css'
const Popup = ({height,width,text}) => {
    const [pop,setPop] = useState(false);
    const handlePop = ()=>{
        setPop(!pop)
    }
  return (
    <>
    <button className='How_To_Play' onClick={handlePop}>
    <GoQuestion  style={{color : "black" ,height ,width}}/>
    <span>{text}</span>
    </button>
    {pop && <div className="modal">
        <div className="overlay" onClick={handlePop}></div>
        <div className="modal-content">
            <h2>How to Play Word Scramble</h2>
            <p>Read the definition of a word. Use the letter tiles to spell the word that matches 
                the definition before time runs out.</p>
                <ul>
                    <li>Select letters one at a time to fill in the blank spaces from left to right.</li>
                    <li>To change a letter, select it again. It will return to its original position.</li>
                    <li>You must move the last letter into the last space before the timer bar at the bottom reaches the other side.</li>
                </ul>
            <p><span>TIP: </span>Don't put the last letter in place until you're sure!</p>
            <p>Each puzzle has only one correct answer. The letters 
                shown on the screen can spell many words, so make sure your answer
                 matches the definition.</p>
                  <p>You will earn points for each correct answer based on 
                    the amount of time you used. Points increase with each correct answer.</p>
                    <p>You have three lives (Life). You lose a life for each incorrect answer and whenever the timer runs out before you've placed the last letter.</p>
                    <p>Come back every day to try and beat your previous scores!</p>
                    <button className="close-modal" onClick={handlePop}>
                    <TiDeleteOutline style={{width:"40px" ,height:"40px" }}/>
                    </button>
        </div>  

    </div>}

    </>
  )
}

export default Popup