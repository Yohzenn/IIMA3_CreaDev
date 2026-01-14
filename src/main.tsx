import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Latest from './components/latest'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Latest></Latest>
  </StrictMode>,
)
