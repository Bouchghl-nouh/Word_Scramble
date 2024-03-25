

import {createContext,useState,useContext} from 'react';
const GameContext = createContext() ;
 const GameProvider = ({children})=>{
const [lives,setLife] = useState(3);
const [score,setScore] = useState(0);
const [GameState,setGameState] = useState('Start');
const [words,setWords] = useState([]);
const [animation,setAnimation] = useState(true);
const [ending,setEnding] = useState(false);
const [loading,setLoading] = useState(true);
return (
    <GameContext.Provider value={{words,setWords,GameState,setGameState,score,setScore,lives,setLife,animation,setAnimation,ending,setEnding,loading,setLoading}}>
        {children}
    </GameContext.Provider>
)
}
 const useGlobalContext = ()=>{
    return useContext(GameContext);
}
export {useGlobalContext,GameContext,GameProvider};