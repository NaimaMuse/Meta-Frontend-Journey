import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Heading from './Components/Heading'

function App() {
  const [word, setword] = useState('Eat')
function clickHandle(){
setword('drink')

}
  return (
    <>
  <Heading message = {word + ' at hotel' }/>
  <button onClick={clickHandle}> click</button>
    </>
  )
}

export default App
