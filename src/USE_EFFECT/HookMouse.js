import React, {useEffect,useState} from 'react'

function HookMouse() {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    const MousePos = e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect Called...")
        window.addEventListener('mousemove', MousePos)

        return ()=>{
            window.removeEventListener('mousemove',MousePos)
        }
    },[])
    return (
        <div>
            <h3>X: {X}</h3>
            <h3>Y: {Y}</h3>
        </div>
    )
}

export default HookMouse
