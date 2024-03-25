import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useGlobalContext } from "../../../Context";
import './Lives.css';
const Lives = () => {
  const {lives} = useGlobalContext();
    const size = {
        width:"25px",
        height:"25px"
    }
  return (
    
    <div className="Lives">
    {Array.from({length:3-lives}).map((_,index)=>(
      <FaRegHeart style={size} key={index} />
    ))}
       {Array.from({length:lives}).map((_,index)=>(
        <FaHeart style={size} key={index}/>
      ))}
    </div>
  
  )
}


export default Lives