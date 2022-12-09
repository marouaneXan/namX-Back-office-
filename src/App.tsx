import TypeContextProvider from "./Context/Car/Types";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Login, Resgister} from './pages/index'
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
function App() {
  return (
    <Router>
      <TypeContextProvider>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
        </Routes>
      </TypeContextProvider>
    </Router>
  );
}

export default App;
