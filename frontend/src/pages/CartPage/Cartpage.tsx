import CheckOutContainer from '../../components/CheckOutContainer/CheckOutContainer';
import { useCart } from '../../context/CartContext';

const Cartpage = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div>
      <h1>Cartpage</h1>
      <CheckOutContainer products={cart} />
    </div>
  );
};

export default Cartpage;
