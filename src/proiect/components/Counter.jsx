import React, { useState } from 'react';

function GoodCounter(props) {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <p>Current Count: {count} </p>
      </div>
    );
}

function BadCounter(props) {
    let count = 0;

    const increase = () => {
        count++;
        console.log(count);
    }

    const decrease = () => {
        count--;
        console.log(count);
    }

    return (
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <p>Current Count: {count}</p>
      </div>
    );
}
  
export { GoodCounter, BadCounter };