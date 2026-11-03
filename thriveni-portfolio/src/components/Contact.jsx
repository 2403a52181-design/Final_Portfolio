import P from '../data/portfolio.js'
export default function Contact() {
  const { email, github, linkedin, leetcode, phone } = P.contact
  const items = [[email && `mailto:${email}`, 'Email', email], [github, 'GitHub', github], [linkedin, 'LinkedIn', linkedin], [leetcode, 'LeetCode', leetcode], [phone && `tel:${phone}`, 'Call', phone]].filter(x => x[0])
  return (<section><p className="eyebrow">04 / CONTACT</p><h1 className="grad">Let's Build Something<br />Meaningful Together.</h1>
    <p className="lead">I'm always excited to connect with developers, explore innovative ideas, collaborate on projects, and discover opportunities to grow.</p>
    {items.length ? <div className="btns">{items.map(([h, l]) => <a key={l} className="btn primary" href={h} target="_blank" rel="noreferrer">{l} ↗</a>)}</div>
      : <p className="card muted">Contact details are not set yet. Add them in <code>src/data/portfolio.js</code>.</p>}</section>)
}
