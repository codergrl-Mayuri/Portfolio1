import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Menu from './components/Menu';
import CustomCursor from './components/Cursor';

function App() {
  return (
    <Router>
      < CustomCursor />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/About' element={<About/>} />
        <Route path ='/Works' element={<Works/>} />
        <Route path ='/Contact' element={<Contact/>} />
        <Route path = '/Menu' element = { <Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
