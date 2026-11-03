import { useState } from 'react'
import P from '../data/portfolio.js'
export default function ProfileImage() {
  const [bad, setBad] = useState(false); const f = P.photo
  return (<div className="frame" style={{ width: f.width, height: f.height, borderRadius: f.radius, '--r': f.radius + 'px' }}>
    {bad ? <div className="mono" aria-label="Profile photo placeholder">T</div>
      : <img src={f.src} alt={`${P.name} – Profile Photograph`} onError={() => setBad(true)} style={{ objectPosition: f.position }} />}</div>)
}
