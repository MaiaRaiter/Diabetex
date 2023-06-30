import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidHome, BiSearch, BiBarcodeReader, BiUser } from "react-icons/bi";

export const Navbar = () => {
  return (
    <center><nav>
      <Link to={"/Home"}> < BiSolidHome className='nav-elements' /> </Link>
      <Link to={"/Producto"}> < BiSearch className='nav-elements' /> </Link>
      <Link to={"/Scanner"}> < BiBarcodeReader className='nav-elements' /> </Link>
      <Link to={""}> < BiUser className='nav-elements' /> </Link>


    </nav> </center>
  )
}
