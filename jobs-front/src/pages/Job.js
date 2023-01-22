import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export function Job() {
    const { id } = useParams()

    const [jobId, setJobId] = useState([])


useEffect(()=>{
    console.log(id)
    axios.get(`https://capstone-be.herokuapp.com/api/jobs/${id}`)
    .then((response)=>{
        console.log(response.data);
        setJobId(response.data);
    })
    .catch((err)=>{console.log(err)})
}, [id])
        


    return (
        <>
            <h1>{jobId.title}</h1>
            <h4>{jobId.company}</h4>
            <h4>{jobId.salary}</h4>
            <h4>{jobId.dateApplied}</h4>
            <h4>{jobId.response}</h4>
            <h4>
            <Link to={`/edit/${jobId.id}`}>Edit this Job</Link>
            </h4>
           
        </>
    )
}