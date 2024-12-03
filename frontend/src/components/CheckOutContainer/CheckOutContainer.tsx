import { useCart } from '../../context/CartContext';
import { IUnit } from '../../models/IUnit';
import Button from '../UI/Buttons/Button';
import styles from './CheckOutContainer.module.css';

interface CheckOutContainerProps {
  products: IUnit[];
}

const CheckOutContainer = ({ products }: CheckOutContainerProps) => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (i: number) => {
    removeFromCart(i);
  };

  return (
    <section className={styles.cartContainer}>
      {products.map((product, i) => (
        <div key={i} className={styles.shoppingItem}>
          <span>{product.title}</span>
          <span>{product.price}$</span>
          <span>{product.material}</span>
          <Button
            onClick={() => handleRemoveItem(i)}
            text='Remove'
            className='remove-btn'
          />
        </div>
      ))}
      <div className={styles.checkOut}>
        <span>Total: {totalPrice}$</span>
        <Button text='Checkout' className='checkOut-btn' />
      </div>
    </section>
  );
};

export default CheckOutContainer;
