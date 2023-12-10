import  {Outlet} from "react-router-dom"
import Navbar from "./Navbar"

export default  function Products(){
    return(
       <div>
        <h1>Products</h1>
       <div>
        <Navbar navLinks={{key1:"Mobiles",key2:"Watches",key3:"Laptops",key4:"Televisions"}}
        navpaths={{url1:"Mobiles",url2:"Watches",url3:"Laptops",url4:"Televisions"}}/>
<div style={{border:"1px solid red",margin:"50px auto", width:"600px",height:"500px"}}>
   <Outlet/>
</div>

       </div>
       </div>
    )
}