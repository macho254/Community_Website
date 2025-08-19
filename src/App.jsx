   
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><About /></>} />  
      </Routes>
    </>
  );
}

export default App;



