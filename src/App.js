import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Link } from "react-router-dom";
import { Job } from './pages/Job';
import { Add } from "./pages/Add"
import { useState } from 'react'
import { Edit } from './pages/Edit';


const App = () => {

  const [jobList, setJobList] = useState([])

  const [jobId, setJobId] = useState([])
  
  return (
    <>
      <nav>
        <ul>
          <li className='list'>
            <button type="button" className="btn btn-info">
            < Link to="/">Home</Link>
            </button>
          </li>
          <br>
          </br>
          <li className='list'>
            <button type="button" className="btn btn-info">
            < Link to="/add">Add a Job</Link>
            </button> 
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home setJobId={setJobId} jobId={jobId} />} />
        <Route path="/display/:id" element={<Job />} />
        <Route path='/add' element={<Add jobList={jobList} setJobList={setJobList}/>} />
        <Route path='/edit/:id' element={<Edit jobList={jobList} setJobList={setJobList}/>} />

      </Routes>
    
    </>
  
  );
}

export default App;
