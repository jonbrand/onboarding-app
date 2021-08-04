import './style.css';

import avatar from '../../assets/photo.jpg';

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar-left">
                <a href="#top" className="active-link">Painel</a>
                <a href="#top">Estatísticas</a>
                <a href="#top" >Mensagens</a> 
            </div>

            <div className="navbar-right">
                <a href="#top">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#top">
                    <i className="fa fa-bell"></i>
                </a>

                <a href="#top">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;