import P from '../data/portfolio.js'
export default function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} {P.name} · Built with React + Vite</footer>
}
