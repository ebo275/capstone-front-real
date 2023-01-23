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

const handleDelete = (id) => {
    axios.delete('https://capstone-be.herokuapp.com/api/jobs/' + id).then((res) => {
      console.log(res.data)
      getJob()
    })
  }
return(
    <>
        <h1 id="header">Ella's Job Hunt</h1>
            {job.map((job, key) => {
                return (
                    <div className='jobs' key={key}>
                        <h4 className="display"><Link to = {`/display/${job.id}`}>{job.title}</Link></h4>
                        <h5 className="display">{job.company}</h5>
                        <button type="button" className="btn btn-info" onClick={()=> {handleDelete(job.id)}}>Delete</button>

                     </div>
                )
            })}
        
    
    </>
)




}

