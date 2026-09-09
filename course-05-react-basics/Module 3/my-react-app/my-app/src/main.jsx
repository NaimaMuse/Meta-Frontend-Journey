import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurrentMessage from './Components/CurrentMessage.jsx'
import Vedio from './Components/Vedio.jsx'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes,Route} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
    <App />

</BrowserRouter>
{/* <CurrentMessage/> */}
{/* <Vedio/> */}
{/* <Vedio/> */}
  </StrictMode>,
)
