'use client'
import Link from 'next/link'
import TabNav from '../../components/TabNav'
import { useEffect, useState } from 'react'
import { getMatches } from '../../lib/api'

export default function JobFeedPage(){
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    getMatches().then(j=>setJobs(j||[])).catch(()=>setJobs([]))
  },[])
  return (
    <div>
      <h1>Recommended Jobs</h1>
      <div className="card">
        {jobs.length===0 && <div className="small">No matching jobs found yet.</div>}
        {jobs.map(job=>(
          <div key={job.id} style={{marginBottom:12}}>
            <div style={{fontWeight:600}}>{job.title}</div>
            <div className="small">{job.company||'Employer'}</div>
            <div style={{marginTop:6}}>{job.location||'Location not set'}</div>
            <div style={{marginTop:6}}>Salary: {job.salary_range||'Negotiable'}</div>
          </div>
        ))}
      </div>

      <TabNav />
    </div>
  )
}
