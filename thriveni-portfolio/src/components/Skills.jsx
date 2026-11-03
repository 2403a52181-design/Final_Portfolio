import { useState } from 'react'
import skills from '../data/skills.js'
export default function Skills() {
  const [i, setI] = useState(0); const c = skills[i]
  return (<section><p className="eyebrow">02 / SKILLS</p><h1 className="grad">Tools I work with.</h1>
    <p className="lead">Technologies and concepts I have explored through learning and project development.</p>
    <div className="tabs" role="tablist">{skills.map((s, k) => <button key={s.name} role="tab" aria-selected={k === i} className={k === i ? 'chip on' : 'chip'} onClick={() => setI(k)}>{s.icon} {s.name}</button>)}</div>
    <div className="card"><div className="tags big">{c.items.map(t => <span key={t} className="tag">{c.icon} {t}</span>)}</div></div></section>)
}
