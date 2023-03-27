import 'bootstrap/dist/css/bootstrap.css';
import Navbarorganicos from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbarorganicos />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a tu mercado virtual de Orgánicos del Retiro" />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
         <Route path="/item/:id" element={<ItemDetailContainer />} /> 
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


