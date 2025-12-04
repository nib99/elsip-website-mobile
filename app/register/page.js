'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '../../lib/api'

export default function RegisterPage(){
  const router = useRouter()
  const [form,setForm] = useState({fullName:'',phone:'',region:'',dateOfBirth:'',gender:'',kebeleId:''})
  const [loading,setLoading] = useState(false)

  const submit = async ()=>{
    if(!form.fullName || !form.phone || !form.region) return alert('Please fill name, phone and region.')
    setLoading(true)
    try{
      await register(form)
      router.push('/assessment')
    }catch(e){
      alert(e.message||e)
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h1>Create Worker Profile</h1>
      <div className="card">
        <input className="input" placeholder="Full name" value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})} />
        <input className="input" placeholder="+251 Phone number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
        <input className="input" placeholder="Region (e.g., Addis Ababa)" value={form.region} onChange={e=>setForm({...form,region:e.target.value})} />
        <input className="input" placeholder="Date of Birth (YYYY-MM-DD)" value={form.dateOfBirth} onChange={e=>setForm({...form,dateOfBirth:e.target.value})} />
        <input className="input" placeholder="Gender" value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})} />
        <input className="input" placeholder="Kebele ID" value={form.kebeleId} onChange={e=>setForm({...form,kebeleId:e.target.value})} />
        <button className="btn" onClick={submit}>{loading ? 'Please wait...' : 'Create profile & Start Assessment'}</button>
        <div style={{height:8}} />
        <div className="small">Already registered? <a href="/login">Login</a></div>
      </div>
    </div>
  )
}
