// Lightweight client-side "API" that stores data in localStorage for demo purposes.
// Replace with real network calls to your backend by using fetch() and API_BASE.
export const API_BASE = ''

export async function register(profile){
  // store profile
  const stored = {...profile, skills: [], assessment_score: null}
  localStorage.setItem('elsip_profile', JSON.stringify(stored))
  return stored
}

export async function login(phone){
  const p = JSON.parse(localStorage.getItem('elsip_profile')||'null')
  if(p && p.phone === phone) return p
  // create demo
  const demo = { fullName:'Demo User', phone, region:'Addis Ababa', skills:[], assessment_score: null }
  localStorage.setItem('elsip_profile', JSON.stringify(demo))
  return demo
}

export async function submitAssessment(answers){
  const p = JSON.parse(localStorage.getItem('elsip_profile')||'{}')
  // simple scoring using sample questions in code; for demo assume correct answers indices [1,1,0]
  const correct = [1,1,0].reduce((s,a,i)=> s + ((answers[i]===a)?1:0), 0)
  const score = Math.round((correct/3)*100)
  p.assessment_score = score
  p.skills = ['measurement_basics','welding_safety'].filter((_,i)=>answers[i]===[1,1][i])
  localStorage.setItem('elsip_profile', JSON.stringify(p))
  return {score, p}
}

export async function getMatches(){
  // return demo jobs
  return [
    { id:1, title:'Welder', company:'ABC Ltd', location:'Addis Ababa', salary_range:'8000 ETB', match_score:92 }
  ]
}

export async function getProfile(){
  return JSON.parse(localStorage.getItem('elsip_profile')||'null')
}
