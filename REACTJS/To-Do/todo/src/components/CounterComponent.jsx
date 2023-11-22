import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(1);
    // const [value, setValue] = useState('odd');

    console.log("Hello", count)

    return (
        <div>
            <p>Count Component - {count}</p>
            <h3>The value is {count % 2 === 0 ? 'EVEN' : 'Odd'}</h3>
            
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default CounterComponent;