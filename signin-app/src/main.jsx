import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import SignIn from './sign.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
