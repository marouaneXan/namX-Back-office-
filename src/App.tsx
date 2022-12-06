
import Layaout from "./components/common/Layaout";
import TypeContextProvider from "./Context/Car/Types";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Login, Resgister, Dashboard ,Cars, Details} from './pages/index'
import Types from "./components/Type/Types";
function App() {
  return (
    <Router>
      <TypeContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
          <Route
            path="/dashboard"
            element={<Layaout> {<Dashboard />} </Layaout>}
          />
          <Route path="cars" element={<Layaout> {<Cars />} </Layaout>} />
          <Route path="details" element={<Layaout> {<Details />} </Layaout>} />
          <Route path="types" element={<Layaout> {<Types />} </Layaout>} />
        </Routes>
      </TypeContextProvider>
    </Router>
  );
}

export default App;
