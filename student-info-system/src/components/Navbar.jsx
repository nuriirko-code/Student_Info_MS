 import { Link } from "react-router-dom";
function Navbar() {
    return (
 <header className="header">
          <div className="logo">
              <i className="fas fa-graduation-cap"></i>  {/* in modern web development: icon libraries like font-awesome use i tags to render icons */}
                                                {/* The className "fas fa-graduation-cap" specifies the icon style and type. fas(font awesome solid) is the style, and fa-graduation-cap is the specific icon */}
           <span>SIMS</span>
           </div>
           <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/login" className="btn-login">Login</Link></li>
            </ul>

           </nav>
      
  </header>
    );
}

export default Navbar;