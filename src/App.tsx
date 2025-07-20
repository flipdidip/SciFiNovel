import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Chapter1Page from "./pages/Chapter1Page";
import ImpressumPage from "./pages/ImpressumPage";
import "./App.css";

function App() {
  return (
    <Router basename="/SciFiNovel">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="chapter/1" element={<Chapter1Page />} />
          <Route path="impressum" element={<ImpressumPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
