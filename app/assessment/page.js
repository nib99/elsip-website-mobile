'use client'
import { useState } from 'react'
import { submitAssessment } from '../../lib/api'
import { useRouter } from 'next/navigation'

const QUESTIONS = [
  { id:1, question:'Which tool is used for measuring length?', options:['Hammer','Measuring Tape','Wrench','Level Tool'], answerIndex:1, skillTag:'measurement_basics' },
  { id:2, question:'Which PPE is mandatory for welding?', options:['Sunglasses','Welding Helmet','Sandals','Cap'], answerIndex:1, skillTag:'welding_safety' },
  { id:3, question:'Which is a frontend programming language?', options:['HTML/CSS/JS','SQL','Bash','C (low level)'], answerIndex:0, skillTag:'basic_it' },
]

export default function AssessmentPage(){
  const [index,setIndex] = useState(0)
  const [answers,setAnswers] = useState(Array(QUESTIONS.length).fill(null))
  const [submitting,setSubmitting] = useState(false)
  const router = useRouter()

  const select = (i) => {
    const c = [...answers]; c[index]=i; setAnswers(c)
  }
  const next = async ()=>{
    if(index < QUESTIONS.length-1) return setIndex(index+1)
    // submit
    setSubmitting(true)
    try{
      await submitAssessment(answers)
      alert('Assessment submitted')
      router.push('/tabs')
    }catch(e){
      alert(e.message||e)
    }finally{ setSubmitting(false) }
  }

  const q = QUESTIONS[index]

  return (
    <div>
      <h1>Skills Assessment</h1>
      <div className="card">
        <div className="small">Question {index+1} of {QUESTIONS.length}</div>
        <h3>{q.question}</h3>
        {q.options.map((o,idx)=>(
          <div key={idx} style={{marginBottom:8}}>
            <button className="option" onClick={()=>select(idx)} style={answers[index]===idx?{borderColor:'var(--primary)',background:'#EDF6FF'}:{}}>
              {o}
            </button>
          </div>
        ))}
        <div style={{height:10}} />
        <button className="btn" onClick={next}>{submitting ? 'Submitting...' : (index < QUESTIONS.length-1 ? 'Next' : 'Submit Assessment')}</button>
      </div>
    </div>
  )
}
