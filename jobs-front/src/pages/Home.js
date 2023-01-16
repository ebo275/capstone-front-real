import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const JobList = ()=> {
    
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
        
    
    </>
)




}