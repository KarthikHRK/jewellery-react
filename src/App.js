import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages'
import Previousshow from './pages/previousShow'
import Upcomingshow from './pages/upcomingpage'
import Navbar from './components/global/navbar'
import Gallery from "./pages/gallerypage";
import Register from "./pages/contact";
import Footer from './components/global/footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/previews-show/:id" element={<Previousshow />} />
        <Route path="/upcoming-show" element={<Upcomingshow />} />         
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/register" element={<Register />} /> 

    </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
