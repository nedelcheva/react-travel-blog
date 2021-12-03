import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Home from './pages/Home/Home';
import AddPage from './pages/AddPage/AddPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AllArticlesPage from './pages/AllArticles/AllArticlesPage';
import MyFavouritesPage from './pages/MyFavouritesPage/MyFavouritesPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';




function App() {
  return (
    <AuthProvider >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all" exact element={<AllArticlesPage />} />
        <Route path="/add" exact element={<PrivateRoute> <AddPage /> </PrivateRoute>} />
        <Route path="/all" exact element={<AllArticlesPage />} />
        <Route path="/favourite" exact element={<PrivateRoute> <MyFavouritesPage /> </PrivateRoute>} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/post/:postId" exact element={<DetailsPage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
