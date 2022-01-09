import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages'
import Previousshow from './pages/previousShow'

import Navbar from './components/global/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/previews-show/:id" element={<Previousshow />} />
                  

    </Routes>
    </div>
  );
}

export default App;
