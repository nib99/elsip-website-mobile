'use client'
import { useState, useRef, useEffect } from 'react'
export default function AssistantPage(){
  const [messages,setMessages] = useState([{id:1,from:'bot',text:"Hello — I'm the ELSIP Assistant. Ask me about jobs, safety, or training."}])
  const [input,setInput] = useState('')
  const ref = useRef(null)
  useEffect(()=>{ ref.current?.scrollIntoView({behavior:'smooth'}) },[messages])
  const send = ()=>{
    if(!input.trim()) return
    const user = {id:Date.now(),from:'user',text:input}
    setMessages(m=>[...m,user])
    setInput('')
    setTimeout(()=>{
      let reply = "I didn't understand. Try: 'find welding jobs' or 'how to verify contract'"
      if(user.text.toLowerCase().includes('weld')) reply = "I found welding jobs in Gulf and Addis. Check your Job Feed. Ensure you have welding safety certificate."
      setMessages(m=>[...m,{id:Date.now()+1,from:'bot',text:reply}])
    },500)
  }
  return (
    <div>
      <h1>AI Assistant</h1>
      <div className="card" style={{maxHeight:320,overflow:'auto'}}>
        {messages.map(m=> <div key={m.id} style={{margin:8,textAlign:m.from==='user'?'right':'left'}}><div style={{display:'inline-block',padding:8,background:m.from==='user'?'var(--primary)':'#fff',color:m.from==='user'?'#fff':'#333',borderRadius:8, border:m.from==='user'?'none':'' }}>{m.text}</div></div>)}
        <div ref={ref} />
      </div>
      <div style={{height:8}} />
      <div className="card">
        <input className="input" placeholder="Ask the ELSIP Assistant..." value={input} onChange={e=>setInput(e.target.value)} />
        <div style={{height:8}} />
        <button className="btn" onClick={send}>Send</button>
      </div>
    </div>
  )
}
