import { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [t, setT] = useState(() => { try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' } })
  useEffect(() => { document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t) } catch {} }, [t])
  return <button className="icon-btn" onClick={() => setT(t === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${t === 'dark' ? 'light' : 'dark'} theme`}>{t === 'dark' ? '☀️' : '🌙'}</button>
}
