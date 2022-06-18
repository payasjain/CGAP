import Explore from "./components/Explore";
import Article from './components/Article'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path="explore" element={<Explore/>} />
          <Route path="explore/:id" element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
