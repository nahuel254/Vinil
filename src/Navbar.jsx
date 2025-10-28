import './Navbar.css'
import Carousel from './Carousel'
import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

function Navbar() {
    return (
    <div className='Herosection'>
      <Carousel />
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#">INICIO</a></li>
          <li><a href="#">PRODUCTOS</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>

        <h2 className="logo">VINIL</h2>

        <ul className="nav-icons">
          <li><a href="#"><MagnifyingGlassIcon className="icon" /></a></li>
          <li><a href="#"><UserIcon className="icon" /></a></li>
          <li><a href="#"><ShoppingBagIcon className="icon" /></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;