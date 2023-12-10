import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Routing/home.jsx"
import Products from "../Routing/products.jsx"
import Register from "../Routing/register.jsx"
import Login from "../Routing/login.jsx"
import Pagenotfound from "../Routing/Pagenotfound.jsx"
import Navbar from "./Navbar.jsx"

function Routing1() {
    return (
        < BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/signup" element={<Login />} />
                <Route path="*" element={<Pagenotfound />} />


            </Routes>

        </BrowserRouter>
    )
} export default Routing1