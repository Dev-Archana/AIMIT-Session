import React, { useMemo, useState } from 'react';

function ExpensiveCalculationComponent({ num }) {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, [num]);

    return (
        <div>
            <p>Expensive Calculation Result: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Re-render</button>
        </div>
    );
}

export default ExpensiveCalculationComponent;