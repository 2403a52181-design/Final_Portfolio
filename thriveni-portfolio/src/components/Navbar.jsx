import { useState } from 'react'
import P from '../data/portfolio.js'
import ThemeToggle from './ThemeToggle.jsx'
const links = [['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['achievements','Achievements'],['contact','Contact']]
export default function Navbar({ route }) {
  const [open, setOpen] = useState(false)
  return (<header className="nav"><a className="logo" href="#/home">{P.name}</a>
    <nav aria-label="Main" className={open ? 'links open' : 'links'}>
      {links.map(([k, l]) => <a key={k} href={`#/${k}`} className={route === k ? 'active' : ''} aria-current={route === k ? 'page' : undefined} onClick={() => setOpen(false)}>{l}</a>)}
    </nav>
    <div className="right"><ThemeToggle /><button className="icon-btn burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button></div></header>)
}
