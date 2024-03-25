import { useState,useEffect } from 'react';
import axios from 'axios' ;
import {generate} from "random-words";
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader' 
import Content from '../../components/Content/Content';
import shuffleWord from '../../Utils/Shuffle';
import { useGlobalContext } from '../../../Context';
const Play = () => {
  const {setEnding,loading,setLoading,setAnimation,setGameState} = useGlobalContext()
  const [word,setWord] = useState(generate());
  const [def,setDef] = useState("");
  const [num,setNum] = useState(0);
  const shuffled = shuffleWord(word);
  
useEffect(()=>{
  const fetchWord = (async()=>{
    let ignore = false;
    try{
      setLoading(true)
      setAnimation(prev => !prev);
          // console.log(word);
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if(!ignore){
              setDef(response.data[0].meanings[0].definitions[0].definition);
            }
            
          
          setNum(num=> num+1);
          setAnimation(prev => !prev)
          setEnding(false);
          setLoading(false);
 
    }catch(e){
        console.log(e);
        setEnding(false);
      setGameState('Error')

    }
  return ()=>{ignore = true};
  })
fetchWord();
},[word]) //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <Header />

   {loading ? <Loader/> : <Content define = {def} word = {shuffled} Res={word} setWord = {setWord} key={num}/>}

    </>
  )
}

export default Play