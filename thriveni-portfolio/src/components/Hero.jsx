import P from '../data/portfolio.js'
import ProfileImage from './ProfileImage.jsx'
const chips = ['Python', 'React', 'ML', 'Data', 'Git']
export default function Hero() {
  const { github, linkedin } = P.contact
  return (<section className="hero"><div>
    <p className="pill"><i /> {P.availability}</p>
    <p className="eyebrow">COMPUTER SCIENCE × ARTIFICIAL INTELLIGENCE</p>
    <h1>{P.name}</h1><h2 className="grad">Curious by Nature.<br />Building with Purpose.</h2>
    <p className="lead">{P.intro}</p>
    <div className="btns"><a className="btn primary" href="#/projects">Explore My Projects ↗</a>
      {P.resume && <a className="btn" href={P.resume} download>Download Resume ⬇</a>}
      {linkedin && <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
      {github && <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>}</div></div>
    <div className="art"><svg className="orbit" viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="180" /><circle cx="200" cy="200" r="130" /><circle cx="380" cy="200" r="6" /><circle cx="70" cy="110" r="4" /></svg>
      <ProfileImage />{chips.map((c, i) => <span key={c} className={`fchip f${i}`} aria-hidden="true">{c}</span>)}</div></section>)
}
