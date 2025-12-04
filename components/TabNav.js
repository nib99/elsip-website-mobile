import Link from 'next/link'
export default function TabNav(){
  return (
    <div className="tabbar">
      <Link href="/tabs"><div style={{padding:10}}>Jobs</div></Link>
      <Link href="/tabs/profile"><div style={{padding:10}}>Profile</div></Link>
      <Link href="/tabs/assistant"><div style={{padding:10}}>Assistant</div></Link>
    </div>
  )
}
