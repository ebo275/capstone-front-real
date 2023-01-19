import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


export function Home() {
    
    const [job, setJob] = useState([])
    const getJob = () => {
        axios.get('https://capstone-be.herokuapp.com/api/jobs').then((res) => {
            console.log(res.data)
            setJob(res.data)
        })
    }

useEffect(() => {
    getJob()
}, [])

return(
    <>
        <h1>Ella's Job Hunt</h1>
            {job.map((job) => {
                return (
                    <div className='jobs' key={'job.id'}>
                        <h4><Link to = {`/${job._id}`}>{job.title}</Link></h4>
                        <h5>{job.company}</h5>
                     </div>
                )
            })}
        
    
    </>
)




}

