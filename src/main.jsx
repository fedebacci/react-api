import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import './assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)