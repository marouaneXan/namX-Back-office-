import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Login, Resgister} from './pages/index'
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Resgister />} />
      </Routes>
    </Router>
  )
}

export default App
