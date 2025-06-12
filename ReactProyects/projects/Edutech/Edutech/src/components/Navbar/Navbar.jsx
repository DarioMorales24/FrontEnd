import './NavbarStyles.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Kmux0hne-wbZcnXICDfQ8xTLXRUWuyoraw&s"
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