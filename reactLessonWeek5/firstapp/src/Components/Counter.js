import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0);
  
    function incrementCount() {
      setCount((count + 1));
      console.log(count);
    }

    function decrementCount() {
        if(count === 0) {
            console.log("Let's stay positive");
        } else {
            setCount((count - 1));
        }
      
    }

    function reset() {
        setCount(0);
        console.log("i reset")
    }

    return (
        <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
};

export default Counter;