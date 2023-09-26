
import React, { useState } from 'react'

import './styles/Counter.css'

const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>

            <div className='btn-count'>
                <button  className='increment' onClick={() => setCount(count + 1)}>Increment</button>
                <button className='decrement' onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;