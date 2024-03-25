import { useRef } from 'react';
import { useGlobalContext } from '../../../Context'
import './TimeLine.css'
const TimeLine = () => {
const {animation,setEnding} = useGlobalContext();
  const timeLine = useRef(null);
  const style = {
    animationName : 'timerAnimation',
        animationDuration: '10s',
        animationTimingFunction:'linear',
        animationFillMode : 'forwards',
        animationPlayState:animation?'running':'paused'
  }

  const handleAnimationEnd = ()=>{
    setEnding(true)
  }
  return (
    <>
    <div className="timer_Container">
    <div className="time_line"  ref = {timeLine} style={style}  onAnimationEnd={handleAnimationEnd}></div>
    </div>
    
    </>
   
  )
}

export default TimeLine