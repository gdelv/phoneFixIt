import React from 'react'
import { jobs } from '../data'

const Jobs = () => {
    return (
        <div className='job-container'>
            <h3>Current openings</h3> 
            <h4>{jobs.length} Jobs</h4>
        {jobs.map(job => {
            return (
                <div className='job-card'>
                    <a target='_blank' href={job.link} rel="noopener noreferrer">{job.title}</a>
                    <h5>{job.location}</h5>
                    <h5>{job.frequency}</h5>
                </div>
            )
        })}
        </div>
    )
}

export default Jobs