import "./App.css";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toolbar from "./components/toolbar/Toolbar";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

const Content = () => {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </Router>
  );
};

function App() {
  return (
    <div className="app-container">
      <Toolbar />
      <div className="main-layout">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
