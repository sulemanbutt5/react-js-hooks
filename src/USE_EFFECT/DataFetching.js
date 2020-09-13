import React,{useEffect,useState} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts,setposts] = useState([])
    const [post,setpost] =useState({})
    const [id,setid] = useState()
    const [idclick,setidclick] = useState()
    
    const handleClick = () => 
    {
        setidclick(id)
    }
    
    useEffect(()=>
    {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res=>{
            setposts(res.data)
        })
        .catch(err=> console.log(err))
    },[])

    useEffect(()=>
    {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idclick}`)
        .then(res=>{
            setpost(res.data)
        })
        .catch(setpost("Not Existed!"))
    },[idclick])

    return (
        <div>
            <br/>
            <label className="ulpost">Search: </label><input className="ulpost" type="number" value={id} onChange={e=>setid(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Data</button>
            <ul className="ulpost">{post.userId} {post.title}</ul>
            <hr/>
            <ul className="ulpost">
                {
                    !id &&
                    posts.map(p=>
                    (
                        <li key={p.id}>{p.userId} {p.title}</li>
                    ))
                }
            </ul>

        </div>
    )
    }
export default DataFetching
