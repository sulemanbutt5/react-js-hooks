import React, {useState,useEffect} from 'react'

function HookCounterOne() {

    const [count, SetCount] =useState(0)
    const [name, SetName] = useState("")
    useEffect(() => {
        console.log("updating...")
        document.title=`You Clicked ${count} times`
    },[count])
    return (
        <div>
            <input value={name} onChange={e => SetName(e.target.value)}></input>
            <button onClick={()=>SetCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
