'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { login } from '../../lib/api'

export default function LoginPage(){
  const router = useRouter()
  const [phone,setPhone] = useState('')
  const [loading,setLoading] = useState(false)

  const handle = async () => {
    if(!phone) return alert('Enter phone')
    setLoading(true)
    // demo: save profile locally via lib/api
    try{
      await login(phone)
      router.push('/tabs')
    }catch(e){
      alert(e.message||e)
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <div className="card">
        <input className="input" placeholder="+251 Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <button className="btn" onClick={handle}>{loading ? 'Please wait...' : 'Continue'}</button>
        <div style={{height:8}} />
        <div className="small">No account? <a href="/register">Create a new profile</a></div>
      </div>
    </div>
  )
}
