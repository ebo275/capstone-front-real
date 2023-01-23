import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios"

export function Edit(){

    const { id } = useParams()
     const [title, setTitle] = useState('');
     const [company, setCompany] = useState('');
     const [salary, setSalary] = useState(0);
     const [dateApplied, setDateApplied] = useState('');
     const [response, setResponse] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        console.log(id)
        axios.get(`https://capstone-be.herokuapp.com/api/jobs/${id}`)
        .then((response)=>{
            console.log(response.data);
            setTitle(response.data.title);
            setCompany(response.data.company);
            setSalary(response.data.salary);
            setDateApplied(response.data.dateApplied);
            setResponse(response.data.response);
        })
        .catch((err)=>{console.log(err)})
    }, [id])


    // const handleChange = (event) => {
    //     setJobId({...jobId, [event.target.name]: event.target.value})
    // }

    // const handleUpdate = (editJob) => {
    //     console.log(editJob)
    //     axios.put(`https://capstone-be.herokuapp.com/api/jobs/${id}`, editJob)
    //       .then((response) => {
    //         console.log(response)
    //         console.log(response.data)
    //       }).catch((error)=> {
    //         console.log(error)
    //       })
    //   }

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://capstone-be.herokuapp.com/api/jobs/${id}`, {
            title,
            company,
            salary,
            dateApplied,
            response
        }).then((response)=> {
            console.log(response.data)
            navigate(`/display/${id}`)
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    return(
        <>
       <div className="container text-bg-dark">
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title: </label>
            <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
            <label htmlFor="company" className="form-label">Company: </label>
            <input onChange={(event) => setCompany(event.target.value)} value={company} type="text" className="form-control" id="company" />
        </div>
        <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary: </label>
            <input onChange={(event) => setSalary(event.target.value)} value={salary} type="text" className="form-control" id="salary" />
        </div>
        <div className="mb-3">
            <label htmlFor="dateApplied" className="form-label">dateApplied: </label>
            <input onChange={(event) => setDateApplied(event.target.value)} value={dateApplied} type="text" className="form-control" id="dateApplied" />
        </div>
        <div className="mb-3">
            <label htmlFor="response" className="form-label">Response: </label>
            <input onChange={(event) => setResponse(event.target.value)} value={response} type="checkbox" className="form-control" id="response" />
        </div>
        <button type="submit" className="btn btn-primary">Edit</button>
        </form>
        </div>
        </>
    )
}