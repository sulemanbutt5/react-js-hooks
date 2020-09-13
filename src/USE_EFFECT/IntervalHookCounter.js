import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [seconds,setseconds]=useState(0)
    const [minutes,setminutes]=useState(0)
    const [hours,sethours]=useState(0)

    function sec()
    {
        setseconds(pr=>pr+1) //Or setseconds(seconds=>seconds+1)
    }
    function min()
    {
        setminutes(pre=>pre+1) //Or setminutes(minutes=>minutes+1)
    }
    function hour()
    {
        sethours(pre=>pre+1) //Or sethours(hours=>hours+1)
    }
    useEffect(()=>
    {

        const interval1 = setInterval(sec,1000)
        const interval2 = setInterval(min,60*1000)
        const interval4 = setInterval(hour,60000*60)

        return ()=>
        {
            clearInterval(interval1)
            clearInterval(interval2)
            clearInterval(interval4)
        }
    },[]) //Or [seconds,minutes,hours]

    return (
        <div>
            <h1>Not a Stopwatch!</h1>
            <br/>
            <h2>{`${hours} : ${minutes} : ${seconds} `}</h2>
        </div>
    )
}

export default IntervalHookCounter
