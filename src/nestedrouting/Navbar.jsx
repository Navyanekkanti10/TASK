import {Link} from "react-router-dom"


function Navbar({navLinks,navpaths,className,anchorClass}){
    return(
        <nav>
            <Link to={navpaths.url1}>{navLinks.key1}</Link>
            <Link to={navpaths.url2}>{navLinks.key2}</Link>
            <Link to={navpaths.url3}>{navLinks.key3}</Link>
            <Link to={navpaths.url4}>{navLinks.key4}</Link>
        </nav>
    )
}
export default Navbar



