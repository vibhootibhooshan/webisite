import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>

// Built pages are pre-rendered HTML → hydrate; dev server serves an empty root → render.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
