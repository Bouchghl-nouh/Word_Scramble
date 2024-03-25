import { useGlobalContext } from '../../../Context';
import TimeLine from '../TimeLine/TimeLine'
import './Content.css'
import { useState ,useEffect,useRef} from 'react';
import {generate} from "random-words";
const Content = ({define, word,Res,setWord}) => {
    const {setLife,setScore,setGameState,lives,setAnimation,ending} = useGlobalContext();
    const [Ulett,setUlett] = useState(word);
    const [Olett,setOlett] = useState(Ulett.map(() => null));
    const [arr, setArr] = useState(Array.from({ length: word.length }, () => null));
    const timeoutRef = useRef(null);

    const result = Olett.every(lett=> lett !== null);
   const handleClick = (letter ,index)=>{
    if(!(result || ending)){
        setUlett(prevLett =>{
            const updatedUlett = [...prevLett];
            updatedUlett[index] = null ;
            
            return updatedUlett ;
        })
        setOlett(prevLett=>{
            const updatedOlett = [...prevLett];
            const i = updatedOlett.indexOf(null);
            updatedOlett[i] = letter ; 
            setArr(prevArr => {
                const updatedArr = [...prevArr];
                updatedArr[i] = index;
                return updatedArr;
            });
            return updatedOlett ;
        })
    }

   }
   const handleBack = (letter,index)=>{
    if(!(result || ending)){
        setOlett(prevLett => {
            const updatedOlett = [...prevLett];
            updatedOlett[index] = null ;
            return updatedOlett ;
           });
           setUlett(prevLett=>{
            const updatedUlett = [...prevLett];
            const i = arr[index];
            updatedUlett[i] = letter ;
            setArr(prevArr=>{
                const updatedArr = [...prevArr];
                updatedArr[index] = null;
                return updatedArr;
            })
            return updatedUlett ;
           })
    }

   }
useEffect(()=>{

    if(result || ending){
        setAnimation(false);
        const wordRes = Olett.join('');
        if(Res === wordRes && !ending ){
            setScore(score=> score+10)
        }else {
           setLife(life=>life-1);
           if(lives <=1){
          timeoutRef.current =   setTimeout(()=>{setGameState("Score")},3000)
           }

        }
        setTimeout(()=>{setWord(generate())},3000);
        return ()=>{clearTimeout(timeoutRef.current)}
    }
},[Olett,ending])//eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
    <div className='Content-Container'>
        <p>{define}</p>
        </div>
        <div className='solution-ordered'>
        {Olett.map((letter,index)=>(
        <button key={index} onClick={()=>{handleBack(letter,index)}}> {letter} </button>
       ))}
        </div>
        <div className="solution-unordered">
        {Ulett.map((letter,index)=>(
        <button onClick={()=>handleClick(letter,index)} key={index}> <span >{letter}</span></button>
       ))}
        </div>
        {(result || ending) && <div className='correct-answer'>The correct answer is : <span>{Res}</span></div>}
        <TimeLine />
     </div>
  )
}

export default Content