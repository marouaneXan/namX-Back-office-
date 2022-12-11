import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypeContextProvider from "./Context/Car/Types";
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import Types from "./pages/Types";
import ModalContextProvider from "./Context/Car/ModalContext";
function App() {
  return (
    <TypeContextProvider>
      <ModalContextProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/types" element={<Types />} />
          </Routes>
        </Router>
      </ModalContextProvider>
    </TypeContextProvider>
  );
}

export default App;
