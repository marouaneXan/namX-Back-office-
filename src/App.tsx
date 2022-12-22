import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypeContextProvider from "./Context/Car/Types";
// import TypeContextProvider from "./Context/Car/Detail";
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import Types from "./pages/Types";
import Details from "./pages/Details";
import DetailContextProvider from "./Context/Car/Detail";
function App() {
  return (
    <TypeContextProvider>
      <DetailContextProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/types" element={<Types />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </DetailContextProvider>
    </TypeContextProvider>
  );
}

export default App;
