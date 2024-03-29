import "../src/styles/App.css";
import SignupPage from "./pages/Signup.page.jsx";
import MainPage from "./pages/Main.page.jsx";
import LoginPage from "./pages/Login.page.jsx";
import IndexPage from "./pages/Index.page.jsx";
import SearchPage from "./pages/Search.page.jsx";
import CardPage from "./pages/Card.page.jsx";
import CardCreatePage from "./pages/CardCreate.page.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cardbook/:cardBookId/themes" element={<IndexPage />} />
      <Route path="/search/:searchKeyword" element={<SearchPage />} />
      <Route
        path="/cardbook/:cardBookId/theme/:themeId/cards"
        element={<CardPage />}
      />
      <Route path="/cardcreate/:cardBookId" element={<CardCreatePage />} />
    </Routes>
  );
}

export default App;
