import React from 'react'

export const NavBar = () => {

    return(
<nav className="navbar navbar-dark navbar-expand-lg d-flex justify-content-between bg-dark">
    <div className="container">
    <div className="container ms-5" > 
        <a className="navbar-brand" href="#">Start Bootstrap</a>
    </div>
    <div className="collapse navbar-collapse me-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li>
            <a className='nav-link' href='#'>Contact</a>
        </li>
        
      </ul>
    </div>
    </div>
  
</nav>

    );
};