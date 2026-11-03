import P from '../data/portfolio.js'
export default function About() {
  const cards = [['01','Stay Curious','Explore concepts, understand problems, and ask better questions.'],['02','Learn by Building','Turn theoretical knowledge into practical projects.'],['03','Improve Continuously','Learn through experiments, debugging, feedback, and iteration.']]
  return (<section><p className="eyebrow">01 / ABOUT</p><h1 className="grad">Building at the intersection of data and ideas.</h1>
    <p className="lead">{P.aboutIntro}</p>
    <dl className="card details">{P.details.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
    <div className="tags">{P.interests.map(i => <span key={i} className="tag">{i}</span>)}</div>
    <div className="grid3">{cards.map(([n, t, d]) => <article className="card" key={n}><span className="num">CARD {n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>)
}
