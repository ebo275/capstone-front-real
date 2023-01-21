import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios"

export function Edit(){


    let emptyJob = { title: '', company: '', salary: '', dateApplied: '', response: false}

    const [job, setJob] = useState(emptyJob)

    const handleChange = (event) => {
        setJob({...job, [event.target.name]: event.target.value})
    }

    const handleUpdate = (editJob) => {
        console.log(editJob)
        axios.put('https://capstone-be.herokuapp.com/api/jobs' + editJob.id, editJob)
          .then((response) => {
            console.log(response)
            console.log(response.data)
          }).catch((error)=> {
            console.log(error)
          })
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        handleUpdate(job)
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
            value={job.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="salary">Salary: </label>
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="dateApplied">Date Applied: </label>
          <input
            type="text"
            name="dateApplied"
            value={job.dateApplied}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="response">Response: </label>
          <input
            type="checkbox"
            name="response"
            value={job.response}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <input type="submit" />
        </form>
        </>
    )
}