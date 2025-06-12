import './NavbarStyles.css'
import logo from '../../assets/logo/logo-lado.webp'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
                <ul className="nav-links">
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Account</a></li>
                </ul>
            </div>
        </nav>
    );
}