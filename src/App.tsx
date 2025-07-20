import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ImpressumPage from "./pages/ImpressumPage";
import "./App.css";

function App() {
  return (
    <Router basename="/SciFiNovel">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="impressum" element={<ImpressumPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
