import Link from 'next/link'
export default function Navbar(){
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
      <div style={{fontWeight:700}}>ELSIP</div>
      <div style={{display:'flex',gap:10}}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  )
}
