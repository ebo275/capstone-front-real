import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            < Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element={<Home />} />
      </Routes>
    
    </>
  
  );
}

export default App;
