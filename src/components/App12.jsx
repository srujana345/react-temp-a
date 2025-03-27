import React,{useState} from 'react'
import Main from './Main'
import { Link } from 'react-router-dom';
export default function App12() {
    const [page, setPage] = useState()
    
  return (
    <div>
        <p>App12</p>
        <Link><button onClick={()=>setPage('a')}>a</button></Link>
        <Link><button onClick={()=>setPage('b')}>b</button></Link>
        <Main c={page} />



    </div>
  )
} 
