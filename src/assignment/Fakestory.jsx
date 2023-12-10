import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieApi(){
    let[movies,setmovies]=useState([])

useEffect(()=>{
getmoviedata()
    
},[])
async function getmoviedata()
{
    let moviedata=await axios.get ("https://fakestoreapi.com/products")
    console.log(moviedata.data);
    setmovies(moviedata.data)
    
}
console.log(movies);

 return (
    <div>
       <ul>
            {movies.map(({id,image})=>{
                return <li key={id}>
                    <img  style={{margin:"20px"}}  height={"300px"}  width={"200px"} src={image} alt="" />
                </li>
            })}
        </ul> 
    </div>
 )

}
export default MovieApi