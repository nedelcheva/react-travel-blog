import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Home from './pages/Home/Home';
import AddPage from './pages/AddPage/AddPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AllArticlesPage from './pages/AllArticles/AllArticlesPage';
import MyFavouritesPage from './pages/MyFavouritesPage/MyFavouritesPage';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all" exact element={<AllArticlesPage />} />
        <Route path="/add" exact element={<AddPage />} />
        <Route path="/all" exact element={<AllArticlesPage />} />
        <Route path="/favourite" exact element={<MyFavouritesPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/post/:postId" exact element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
