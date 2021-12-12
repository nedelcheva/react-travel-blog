import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Home from './pages/Home/Home';
import AddPage from './pages/AddPage/AddPage';
import EditPage from './pages/EditPage/EditPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AllArticlesPage from './pages/AllArticles/AllArticlesPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
        <Route path="/edit/:id" exact element={<PrivateRoute> <EditPage /> </PrivateRoute>} />
        <Route path="/all" exact element={<AllArticlesPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/post/:id" exact element={<DetailsPage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
