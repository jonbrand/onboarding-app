import './style.css';

import 'font-awesome/css/font-awesome.min.css'; 

import logo from '../../assets/photo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
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
                <div className="sidebar-link active-menu-link">
                    <i class="fa fa-minus-square"></i>
                    <a href="#top">Home</a>
                </div>
                <h2>GERÊNCIA</h2>
                <div className="sidebar-link">
                    <i class="fa fa-calendar-check-o"></i>
                    <a href="#top">Agenda</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-building"></i>
                    <a href="#top">Filiais</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#top">Funcionários</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#top">Diretoria</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-line-chart"></i>
                    <a href="#top">Relatórios</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar-link">
                    <i className="fa fa-male"></i>
                    <a href="#top">Administradores</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-users"></i>
                    <a href="#top">Usuarios</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-money"></i>
                    <a href="#top">Orçamento</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-cog"></i>
                    <a href="#top">Configurações</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-file-alt"></i>
                    <a href="#top">Politica de privacidade</a>
                </div>
                <div className="sidebar-logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#top">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;