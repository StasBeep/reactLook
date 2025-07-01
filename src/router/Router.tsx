import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ShoppingCart from '../pages/ShoppingCart';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
    </Routes>
  );
};

export default Router;
