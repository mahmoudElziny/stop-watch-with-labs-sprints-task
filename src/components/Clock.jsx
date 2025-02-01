import React, { useEffect } from 'react'

export default function Clock({ time, setTime }) {


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='clock'>{time.toLocaleTimeString()}</div>
    )
}
