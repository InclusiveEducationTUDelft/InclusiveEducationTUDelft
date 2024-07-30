import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <LandingPage />
    </HashRouter>
  </React.StrictMode>,
)
