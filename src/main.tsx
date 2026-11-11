import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import StudioApp from './StudioApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudioApp />
  </StrictMode>,
)
