import { useEffect, useState } from "react"
import Postsingular from "../Postsingular";



export default function Post(){
const [posts , setPosts] = useState([])

useEffect( () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then( data => setPosts(data));
}
    ,[])
   
return(
        <div>
        post:{posts.length}
        {
            Post.map(Post => <Postsingular></Postsingular>)
        }
        </div> 

    )
}

/**
 * 1. Create a state to sotre data.
 * 2. Create use effect with no dependencies. (use effer er moddhe call back function hoy)
 * 3. 
 */