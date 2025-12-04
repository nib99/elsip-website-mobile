import './globals.css'

export const metadata = {
  title: 'ELSIP - Mobile Web',
  description: 'Worker registration, assessment and job feed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header">
          <div style={{fontWeight:700}}>ELSIP</div>
          <div className="nav-links" style={{opacity:0.95}}>Mobile</div>
        </div>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
