import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import Password from './components/Password/Password'
import Login from './components/Login/Login'
import Footer from './components/Footer'
import Reset from './components/Reset/Reset'
import Contact from './components/Contact/Contact'
import Billing from './components/Billing/Billing'
import Header from './components/Header'
import LoginIssue from './components/LoginIssue/LoginIssue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      <Footer />
      <div>
        <SignUp />
        <Footer />
      </div>
      <div>
        <Password />
        <Footer />
      </div>
      <div>
        <Reset />
        <Footer />
      </div>
      <Contact />
      <div>
        <Billing />
      </div>
      <LoginIssue />
    </div>
  )
}

export default App
