import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export function Job() {
    const { id } = useParams()

    const [job, setJob] = useState([])
//     const getJob = () => {
//         axios.get('https://capstone-be.herokuapp.com/api/jobs').then((res) => {
//             console.log(res.data)
//             setJob(res.data)
//         })
//     }

// useEffect(() => {
//     getJob()
// }, [])

useEffect(()=>{
    axios.get(`https://capstone-be.herokuapp.com/api/jobs/${id}`)
    .then((response)=>{
        console.log(response.data);
        setJob(response.data);
    })
    .catch((err)=>{console.log(err)})
}, [id])
        

    return (
        <>
        
            {job.map((job) => {
                return (
                    <div className='jobs' key={'job.id'}>
                        <h4>{job.id}</h4>
                        <h4>{job.title}</h4>
                        <h5>{job.company}</h5>
                     </div>
                )
            })}
        </>
    )
}