import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Analyze from "./pages/Analyze.jsx";
import Notice from "./pages/Notice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </Router>
  );
}

export default App;
