import './Loader.css'
import imgLoader from '/loader.svg'

const Loader = () => {
  return (
    <div className='loading'>
        <img src={imgLoader} alt="Loading ..." width={100} height={100} />
    </div>
  )
}

export default Loader