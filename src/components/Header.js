import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (

    <div className='Header'>
     <nav
      className={`navbar navbar-expand-lg  fixed-top sticky  ${
        scrolled ? "solid" : "transparent"
      }`}
    >
    <div className="container-fluid custom-container">
      <a className="navbar-brand logo text-uppercase" href="index.html">
        <img
          src="images/logo-light.png"
          className="logo-light"
          alt=""
          height={34}
        />
        <img
          src="images/logo-dark.png"
          className="logo-dark"
          alt=""
          height={34}
        />
      </a>
      <button
        className="navbar-toggler me-3 order-2 ms-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-label="Toggle navigation"
      >
        <i className="mdi mdi-menu" />
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
        <ul className="navbar-nav  navbar-center">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown dropdown-hover">
            <Link className='nav-link' to="/about" > About Me </Link>
          </li>
          <li className="nav-item dropdown dropdown-hover">
            <Link className='nav-link' to="/portfolio">Portfolio</Link>
          </li>
      
          <li className="nav-item">
            <Link to="/contact"  className="nav-link">Contact</Link>
          </li>
        </ul>
        {/*end navbar-nav*/}
      
      </div>
    </div>
  </nav>

   </div>
  )
}

export default Header
