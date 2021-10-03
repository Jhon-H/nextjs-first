import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
      <Link href='/'>
        <a className='navbar-brand'> Portafolio </a>
      </Link>

      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto ml-auto'>

          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'> Home </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/proyects'>
              <a className='nav-link'> Proyects </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'> About Us </a>
            </Link>
          </li>

        </ul>
      </div> {/* collapse-navbar */}
      </div> {/* container */}
    </nav>
  )
}

export default Navbar;
