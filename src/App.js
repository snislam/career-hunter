import './App.css';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Common/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import RequireAuth from './Common/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/checkout/:courseCode' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
