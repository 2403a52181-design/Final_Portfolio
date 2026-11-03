import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Achievements from './components/Achievements.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
const routes = { home: Hero, about: About, skills: Skills, projects: Projects, achievements: Achievements, contact: Contact }
const read = () => { const r = location.hash.replace('#/', ''); return routes[r] ? r : 'home' }
export default function App() {
  const [route, setRoute] = useState(read)
  useEffect(() => { const f = () => setRoute(read()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f) }, [])
  const View = routes[route]
  return (<><div className="bg" aria-hidden="true" /><Navbar route={route} />
    <main key={route} className="view"><View /></main>
    <Footer /></>)
}
