import './style.css';

import 'font-awesome/css/font-awesome.min.css'; 

import logo from '../../assets/photo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={logo} alt="logo" />
                    <h1>Nexus.JR</h1>
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
                <h2>ADMIN</h2>
                <div className="sidebar-link">
                    <i class="fa fa-tachometer"></i>
                    <a href="#top">Area administrativa</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-building"></i>
                    <a href="#top">Lojas</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-archive"></i>
                    <a href="#top">Produtos</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-bars"></i>
                    <a href="#top">Categorias</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#top">Pedidos</a>
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
                    <a href="#top">Pagamentos e custos</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-tasks"></i>
                    <a href="#top">A Plataforma</a>
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