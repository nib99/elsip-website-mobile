'use client'
import { useEffect, useState } from 'react'
import { getProfile } from '../../../lib/api'

export default function ProfilePage(){
  const [profile,setProfile] = useState(null)
  useEffect(()=>{
    getProfile().then(p=>setProfile(p)).catch(()=>setProfile(null))
  },[])
  if(!profile) return <div className="card"><div>Profile not found</div></div>
  return (
    <div>
      <h1>Worker Profile</h1>
      <div className="card">
        <div style={{fontSize:18,fontWeight:600}}>{profile.full_name || profile.fullName}</div>
        <div className="small">Phone: {profile.phone}</div>
        <div className="small">Region: {profile.region}</div>
        <div>Skills: {Array.isArray(profile.skills)?profile.skills.join(', '):'—'}</div>
        <div>Assessment score: {profile.assessment_score ?? '—'}</div>
        <div style={{height:12}} />
        <div style={{fontWeight:600,marginBottom:8}}>Skills ID QR</div>
        {profile.qrCodeDataUrl ? <img src={profile.qrCodeDataUrl} className="qr" alt="qr"/> : profile.qr_token ? <img src={`data:image/png;base64,${profile.qr_token}`} className="qr" alt="qr"/> : <div>No QR available</div>}
      </div>
    </div>
  )
}
