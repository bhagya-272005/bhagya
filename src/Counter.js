import React, { useState } from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0);
    
    const increament = () => setCount(count + 1 );
    const decreament = () => setCount(count - 1 );

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
        </div>
    );
} 
export default Counter