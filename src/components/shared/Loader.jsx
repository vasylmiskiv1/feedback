import loader from '../assets/loader.gif'

export default function Loader() {
  return (
    <img 
      src={loader} 
      alt="loading"
      style={{
        width: '50px',
        margin: 'auto',
        display: 'block'
      }} 
    />
  )
}


