import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Router from './routes';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/members')
    }
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}
export default App;
