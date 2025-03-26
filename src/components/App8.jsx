import React, { useState, useEffect } from 'react';

export default function App8() {
    const [a, setA] = useState();

    const [numbers, setNumbers] = useState([]);
    const [total, setTotal] = useState(0);
    const handleSubmit = () => {

        const num=Number(a);
        setNumbers([...numbers, num]);
        
        setA('')
    };
    useEffect(() => {
        setTotal(numbers.reduce((sum, value) => 
            sum + Number(value), 0));
    }, [a]);
    return (
        <div>App8
            <p>
                <input
                    type="number"
                    placeholder="Enter num"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />
           
            <button onClick={handleSubmit}>ADD</button> </p>
            <p>Numbers:{numbers.join(',')}</p>
            <p>Total:{total}</p>
        </div>
    );
}
