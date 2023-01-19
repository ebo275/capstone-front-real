import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export function Add (props) {
    // const {jobList, setJobList} = props;
    let emptyJob = { title: '', company: '', salary: '', dateApplied: '', response: false}
    const [job, setJob] = useState(emptyJob)
    const navigate = useNavigate()

    
    const handleChange = (event) => {
        setJob({...job, [event.target.name]: event.target.value})
    }
    const handleCreate = (addJob) => {
        axios.post('https://capstone-be.herokuapp.com/api/jobs', addJob).then((response)=>{
            console.log(response);
            console.log(response.data);
            
            // setJobList([...emptyJob, response.data]);
            
            // navigate('/all')
        }).catch((error)=>{
            console.log(error)
        })
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreate(job)
    }
    
    return (
        <div className="container text-bg-dark">
            <h1>Add Post</h1>
            <form onSubmit = {handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value= {job.title} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="company">Company: </label>
        <input type="text" name="company" value= {job.company} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="salary">Salary: </label>
        <input type="text" name="salary" value= {job.salary} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="dateApplied">Date Applied: </label>
        <input type="text" name="dateApplied" value= {job.dateApplied} onChange = {handleChange} />
        <br />
        <br />
        
        <br/>
        <br/>
        <input type="submit"/>
      </form>
        </div>
    )


}
