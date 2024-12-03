import '@fortawesome/fontawesome-free/css/all.css';
import { useCart } from '../../../context/CartContext';
import styles from './CartIcon.module.css';

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <div className={styles.cartSymbol}>
      <i className='fa-solid fa-cart-shopping text-2xl'></i>
      {cart.length !== 0 && (
        <div className={styles.cartCounter}>{cart.length}</div>
      )}
    </div>
  );
};

export default CartIcon;
