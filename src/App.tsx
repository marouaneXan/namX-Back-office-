import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypeContextProvider from "./Context/Car/Types";
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
function App() {
  return (
    <Router>
      <TypeContextProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </TypeContextProvider>
    </Router>
  );
}

export default App;
