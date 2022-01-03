import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'

const App = () => {
  return (
    <Routes>  {/* Previously Routes were called Switch component */}
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
