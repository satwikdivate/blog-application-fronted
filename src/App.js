import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from "./pages/NotFoundPage";
import {  Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./pages/LoginPage";
import CreateAccountPggae from "./pages/CreateAccountPggae";
function App() {
  return (
    <div className="App">
     <NavBar/>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:articlesId" element={<ArticlePage />} />

          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/create-account" element
          ={<CreateAccountPggae/>}/>
        </Routes>

        
      </div>
    </div>
  );
}

export default App;
