import P from '../data/portfolio.js'
export default function Achievements() {
  return (<section><p className="eyebrow">03 / ACHIEVEMENTS</p><h1 className="grad">Achievements & Certifications</h1>
    <h2 className="sub">Milestones of Learning, Innovation & Growth</h2>
    <p className="lead">Every certification, internship, and hackathon represents my dedication to continuous learning, technical growth, and turning knowledge into practical experience.</p>
    <div className="grid4">{P.achievements.map(a => <article className="card ach" key={a.title}>
      <div className="arow"><div className="aicon" aria-hidden="true">{a.icon}</div><span className="badge">{a.badge}</span></div>
      <h3>{a.title}</h3><p>{a.text}</p>
      {a.status && <p className="status">Status: {a.status}</p>}
      {a.link && <a className="btn sm" href={a.link} target="_blank" rel="noreferrer">View Certificate ↗</a>}</article>)}</div></section>)
}
