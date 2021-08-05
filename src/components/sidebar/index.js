import { useState } from 'react';
import './style.css';

import 'font-awesome/css/font-awesome.min.css'; 

import logo from '../../assets/photo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0);

    const sidebarItems = [
        {
            title: 'Home',
            icon: 'fa-minus-square',
        },
        {
            title: 'Agenda',
            icon: 'fa-calendar-check-o',
        },
        {
            title: 'Filiais',
            icon: 'fa-building',
        },
        {
            title: 'Funcionários',
            icon: 'fa-user-circle',
        },
        {
            title: 'Diretoria',
            icon: 'fa-briefcase',
        },
        {
            title: 'Relatórios',
            icon: 'fa-line-chart',
        },
        {
            title: 'Administradores',
            icon: 'fa-male',
        },
        {
            title: 'Usuarios',
            icon: 'fa-users',
        },
        {
            title: 'Orçamento',
            icon: 'fa-money',
        },
        {
            title: 'Configurações',
            icon: 'fa-cog',
        },
        {
            title: 'Politica de privacidade',
            icon: 'fa-file-alt',
        },
    ];

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={logo} alt="logo" />
                    <h1>Jonatas Brandão</h1>
                </div>

                <i
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar-menu">
                <button
                    onClick={() => setSelectedMenuItemIndex(0)}
                    className={`sidebar-link ${selectedMenuItemIndex === 0 ? 'active-menu-link' : ''}`}
                >
                    <i className={`fa ${sidebarItems[0].icon}`}></i>
                    <a href="#top">{sidebarItems[0].title}</a>
                </button>
                <h2>GERÊNCIA</h2>

                {
                    sidebarItems.splice(1, 4).map((item, index) => (
                        <button
                            onClick={() => setSelectedMenuItemIndex(index + 1)}
                            className={`sidebar-link ${selectedMenuItemIndex === index + 1 ? 'active-menu-link' : ''}`}
                        >
                            <i className={`fa ${item.icon}`}></i>
                            <a href="#top">{item.title}</a>
                        </button>
                    ))
                }

                <h2>PESSOAS</h2>

               {
                sidebarItems.splice(1).map((item, index) => (
                        <button
                            onClick={() => setSelectedMenuItemIndex(index + 5)}
                            className={`sidebar-link ${selectedMenuItemIndex === index + 5 ? 'active-menu-link' : ''}`}
                        >
                            <i className={`fa ${item.icon}`}></i>
                            <a href="#top">{item.title}</a>
                        </button>
                    ))
                }

                <div className="sidebar-logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#top">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;