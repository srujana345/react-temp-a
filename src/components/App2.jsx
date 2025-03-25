import {useState} from 'react'

export default function App2(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>this is App2</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}