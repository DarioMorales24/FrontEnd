import './SidebarStyles.css'
import {NavLink, useNavigate} from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
    }


    return (
        <div className={'bar'}>
            <ul className={'btns-upper'}>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/courses"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Cursos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/enrollment"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Inscripciones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/payments"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Pagos
                    </NavLink>
                </li>
            </ul>

            <ul className="btns-bottom">
                <li>
                    <NavLink
                        to="/support"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Support
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                    >
                        Setting
                    </NavLink>
                </li>
                <li>
                    <button className={'btn'} onClick={handleLogout}>Cerrar Sesion</button>
                </li>
            </ul>
        </div>
    )
}