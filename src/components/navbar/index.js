import { useState } from 'react';
import './style.css';

import avatar from '../../assets/photo.jpg';

const Navbar = ({ sidebarOpen, openSidebar}) => {
    const [selectedNavbarItemIndex, setSelectedNavbarItemIndex] = useState(0);

    const navbarItems = [
        'Painel',
        'Estatísticas',
        'Mensagens',
    ];
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar-left">
                {navbarItems.map((item, index) => (
                    <a
                        href="#teste"
                        onClick={() => setSelectedNavbarItemIndex(index)}
                        className={selectedNavbarItemIndex === index ? 'active-link' : ''}
                    >{item}</a>
                ))}
            </div>

            <div className="navbar-right">
                <a href="#teste">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#teste">
                    <i className="fa fa-bell"></i>
                </a>

                <a href="#teste">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;