import './SidebarStyles.css'

export const Sidebar = () => {
    return (
        <div className={'bar'}>
            <ul className={'btns-upper'}>
                <li>
                    <button className={'btn'}>Dashboard</button>
                </li>
                <li>
                    <button className={'btn'} itemID={'courseBtn'}>Cursos</button>
                </li>
                <li>
                    <button className={'btn'}>Inscripciones</button>
                </li>
                <li>
                    <button className={'btn'}>Pagos</button>
                </li>
            </ul>
            <ul className={'btns-bottom'}>
                <li>
                    <button className={'btn'}>Support</button>
                </li>
                <li>
                    <button className={'btn'}>Setting</button>
                </li>
                <li>
                    <button className={'btn'}>Cerrar Sesion</button>
                </li>
            </ul>
        </div>
    )
}