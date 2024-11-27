import React from 'react'

function CountingFunction() {
    const [count, setCount] = React.useState(0);
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            <br />
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CountingFunction
