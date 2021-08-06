import { useState } from 'react';

import './style.css';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Main from '../../components/main';

const Dashboard = () => {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
    </div>
  );
}

export default Dashboard;