import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/HomePage/Homepage';
import styles from './MainLayout.module.css';
import Factionpage from '../pages/FactionPage/Factionpage';
import Cartpage from '../pages/CartPage/Cartpage';
import Header from '../components/UI/Header/Header';
import Unitpage from '../pages/UnitPage/Unitpage';
import SpecificFactionpage from '../pages/SpecificFactionPage/SpecificFactionpage';
import { CartProvider } from '../context/CartContext';
import Searchpage from '../pages/SearchPage/Searchpage';
const MainLayout = () => {
  //Add browserrouter, context provider, routes
  return (
    <div>
      <div className={styles.bgImage}></div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/faction' element={<Factionpage />} />
            <Route
              path='/faction/:factionName'
              element={<SpecificFactionpage />}
            />
            <Route path='/unit/:id' element={<Unitpage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/search' element={<Searchpage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default MainLayout;
