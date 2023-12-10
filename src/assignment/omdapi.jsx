import axios from "axios";
import React, {  useState } from "react";

function Movie(){
    let[movies,setmovies]=useState([])
    let [input, setInput] = useState("");


let updateInput = ({target:{value}})=>{
    setInput(value)
    console.log(input); 
        
}
function searchval(){
async function getmoviedata()
{
   
    let moviedata=await axios.get (`http://www.omdbapi.com/?s=${input}&apikey=c07b891a`)
    console.log(moviedata.data.Search);
    setmovies(moviedata.data.Search)
    
}  
getmoviedata() 
}
console.log(movies);

 return (
    <div >
       <input type="text" placeholder="search" onChange={updateInput}/>
       <button onClick={searchval}>search</button>
       <div style={{display:"flex" ,flexWrap:"wrap" ,gap:"20px"}}>
      {
         movies.map(({imdbID,Poster,Title,Year})=>{
            return (
                <div style={{height:"227px"}}   key={imdbID}>
                    <img  style={{margin:"20px"}}  height={"100px"}  width={"100px"} src={Poster} alt="" />
                    <p style={{margin:"20px",marginTop:"-8px"}}>{Title}</p>
                    <p style={{margin:"20px" ,marginTop:"-8px"}}> {Year}</p>
                </div>
            )
            
           })
      }
      </div>
    </div>
 )

}
export default Movie