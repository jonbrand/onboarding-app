import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
