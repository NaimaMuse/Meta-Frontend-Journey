import { useState } from 'react'

function Counter() {
    const  [count , setCount] = useState(0)
    function clickHandle(){
        setCount(count+1)
    }
    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={clickHandle}>click me</button>
</>
     );
}

export default Counter;