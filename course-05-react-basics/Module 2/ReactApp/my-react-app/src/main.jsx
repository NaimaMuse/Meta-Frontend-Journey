import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Btn from './Components/Btn.jsx'
import ModeTogger from './Components/ModeTogger.jsx'
import Parent from './Components/Parent.jsx'
import Child from './Components/Child.jsx'
import Counter from './Components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Btn/> */}
    {/* <ModeTogger/> */}
    {/* <Parent/> */}
    {/* <Child/> */}
    <Counter/>
  </StrictMode>,
)
