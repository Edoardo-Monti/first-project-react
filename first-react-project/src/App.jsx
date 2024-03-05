import { useState } from 'react'

import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>         
        <Header/>
        <div>
          <Main/>
        </div>

        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <Footer/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
