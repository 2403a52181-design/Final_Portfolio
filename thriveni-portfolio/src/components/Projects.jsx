import { useEffect, useState } from 'react'
import projects from '../data/projects.js'
const cats = ['All', 'Web Development', 'AI & ML', 'Data Analytics']
function Card({ p }) {
  const [bad, setBad] = useState(false)
  return (<article className="card proj">
    {bad ? <div className="ph">{p.title}</div> : <img src={p.image} alt={`${p.title} preview`} loading="lazy" onError={() => setBad(true)} />}
    <div className="pbody"><span className="num">PROJECT {String(p.id).padStart(2, '0')} · {p.category}</span><h3>{p.title}</h3><p>{p.description}</p>
      <div className="tags">{p.tech.map(t => <span key={t} className="tag sm">{t}</span>)}</div>
      {(p.github || p.demo) && <div className="btns sm">{p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}{p.demo && <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}</div>}</div></article>)
}
export default function Projects() {
  const [f, setF] = useState('All'); const [page, setPage] = useState(0)
  const [size, setSize] = useState(6)
  useEffect(() => { const m = window.matchMedia('(max-width:560px)'); const u = () => { setSize(m.matches ? 2 : 6); setPage(0) }; u(); m.addEventListener('change', u); return () => m.removeEventListener('change', u) }, [])
  const list = projects.filter(p => f === 'All' || p.category === f)
  const pages = Math.max(1, Math.ceil(list.length / size)); const cur = Math.min(page, pages - 1)
  return (<section><h1 className="grad">My Projects</h1><p className="lead">Showcasing projects in software development, machine learning, and data analytics.</p>
    <div className="tabs">{cats.map(c => <button key={c} className={f === c ? 'chip on' : 'chip'} aria-pressed={f === c} onClick={() => { setF(c); setPage(0) }}>{c}</button>)}</div>
    <div className="grid3">{list.slice(cur * size, cur * size + size).map(p => <Card key={p.id} p={p} />)}</div>
    {pages > 1 && <div className="pager"><button className="chip" disabled={cur === 0} onClick={() => setPage(cur - 1)}>← Prev</button><span className="muted">Page {cur + 1} / {pages}</span><button className="chip" disabled={cur === pages - 1} onClick={() => setPage(cur + 1)}>Next →</button></div>}</section>)
}
