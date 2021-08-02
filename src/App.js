import { useState } from 'react';

import './App.css';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Main from './components/main/index';

const App = () => {
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

export default App;
