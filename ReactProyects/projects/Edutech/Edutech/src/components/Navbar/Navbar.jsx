import './NavbarStyles.css'
import logo from '../../assets/logo/logo-lado.webp'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <NavLink
                        to="/dashboard"
                    >
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <ul className="nav-links">
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Account</a></li>
                </ul>
            </div>
        </nav>
    );
}