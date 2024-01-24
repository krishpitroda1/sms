import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="title">
          SMSCloud Hub
        </Link>
        <ul className="ul">
          <Link to="/Resources" className="menuTrigger">
            Segments
          </Link>
          <div className="dropdown">
            <Link to="/Blogs">blogs</Link>

            <Link to="/Test">test</Link>

            <Link to="/Stories">stories</Link>

            <Link to="/Apidoc">api documents</Link>
          </div>
          <Link to="/Products">Products</Link>
          <Link to="/Carrier">Careers</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contacts">contact Us</Link>
        </ul>
         <div className='dropdown-menu'>
        {/* <ul>
            <DropdownItem text={"blogs"}/>
            <DropdownItem text={"tests"}/>
            <DropdownItem text={"stories"}/>
            <DropdownItem text={"api documents"}/>

        </ul> */}
      </div>
     </nav> 
      
    </div>
  );
}
export default Navbar;