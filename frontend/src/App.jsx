import Nav from './components/Nav/Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Index from './components/Pages/Index';
import ProductDetails from './components/Pages/ProductDetails';
function App() {


  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    </>
  )
}

export default App
