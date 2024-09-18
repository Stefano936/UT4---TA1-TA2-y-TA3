import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <div>Segundos = {counter}</div>
        </div>
    );
};

export default Timer;