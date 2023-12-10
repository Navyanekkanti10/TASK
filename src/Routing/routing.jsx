import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home.jsx"
import Products from "./products.jsx"
import Register from "./register.jsx"
import Login from "./login.jsx"
import Pagenotfound from "./Pagenotfound.jsx"

function Routing() {
    return (
        < BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/signup" element={<Login />} />
                <Route path="*" element={<Pagenotfound />} />


            </Routes>

        </BrowserRouter>
    )
} export default Routing