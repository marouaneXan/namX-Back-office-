import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Resgister, Dashboard, Cars } from "./pages/index";
import Layaout from "./components/common/Layaout";
import TypeContextProvider from "./Context/Car/Types";
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
          <Route path="Cars" element={<Layaout> {<Cars />} </Layaout>} />
        </Routes>
      </TypeContextProvider>
    </Router>
  );
}

export default App;
