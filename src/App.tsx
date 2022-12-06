import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Login, Resgister, Dashboard ,Cars, Details} from './pages/index'
import Layaout from './components/common/Layaout'
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Resgister />} />
      <Route path='/dashboard' element={<Layaout> {<Dashboard />} </Layaout>} />
      <Route path='/Cars' element={<Layaout> {<Cars />} </Layaout>} />
      <Route path='/details' element={<Layaout> {<Details />} </Layaout>} />
      </Routes>
    </Router>
  )
}

export default App
