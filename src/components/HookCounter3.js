import React, {useState} from "react"

function HookCounter3()
{
    const [name,setName]=useState({fname:'',lname:''})
    return(
        <form>
            <input value={name.fname} onChange={e=> setName({...name,fname: e.target.value})}/>
            <input value={name.lname} onChange={e=> setName({...name,lname: e.target.value})}/>
            <h2>First Name: {name.fname}</h2>
            <h2>Last Name: {name.lname}</h2>
        </form>
    )
}

export default HookCounter3