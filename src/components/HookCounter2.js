import React, {useState} from "react"

function HookCounter()
{


    const initialCount=0
    const [count,setCount]=useState(initialCount)
    
    function inc5(){
        for(let i=0;i<5;i++)
        {
            setCount(pr=>pr+1)
        }
    }
    
    return(
        <div>
            Count: {count}
            <br/>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(pr=>pr+1)}>Increment</button>
            <button onClick={()=>setCount(pr=>pr-1)}>Decrement</button>
            <button onClick={inc5}>Increment 5</button>
        </div>
    )
}

export default HookCounter