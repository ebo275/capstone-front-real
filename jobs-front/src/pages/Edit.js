import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios"

export function Edit(){

    const { id } = useParams()
     const [title, setTitle] = useState('');
     const [company, setCompany] = useState('');
     const [salary, setSalary] = useState(0);
     const [dateApplied, setDateApplied] = useState('');
    //  const [response, setResponse] = useState(false);



    useEffect(()=>{
        console.log(id)
        axios.get(`https://capstone-be.herokuapp.com/api/jobs/${id}`)
        .then((response)=>{
            console.log(response.data);
            setTitle(response.data.title);
            setCompany(response.data.company);
            setSalary(response.data.salary);
            setDateApplied(response.data.dateApplied);

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
            dateApplied
        }).then((response)=> {
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    return(
        <>
        <h1>
            Edit this Job
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event)=> setTitle(event.target.value)} 
          />
          <br />
          <br />
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(event)=> setCompany(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="salary">Salary: </label>
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={(event)=> setSalary(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="dateApplied">Date Applied: </label>
          <input
            type="text"
            name="dateApplied"
            value={dateApplied}
            onChange={(event)=> setDateApplied(event.target.value)}
          />
          
          <br/>
          <br/>
          <button type="submit"><Link to='/'>Submit</Link></button>
        </form>
        </>
    )
}