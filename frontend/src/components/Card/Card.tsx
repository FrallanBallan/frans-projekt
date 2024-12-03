import { useNavigate } from 'react-router-dom';
import { IUnit } from '../../models/IUnit';
import styles from './Card.module.css';
import { useCart } from '../../context/CartContext';
import Button from '../UI/Buttons/Button';

interface UnitCardProps {
  unit: IUnit;
}

const Card = ({ unit }: UnitCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  //   console.log('Rendering unit:', unit);

  const handleReDirect = () => {
    navigate(`/unit/${unit.id}`);
  };

  const handleAddToCart = () => {
    addToCart(unit);
  };
  return (
    <div className={styles.card}>
      <h3>{unit.title}</h3>
      <img
        className={styles.cardImage}
        src={unit.img_url}
        alt={unit.title}
        onClick={handleReDirect}
      />
      <div>
        <small>{unit.material}</small>
        <small>{unit.faction}</small>
        <small>{unit.price}$</small>
      </div>
      <Button
        onClick={handleAddToCart}
        text='Add to Cart'
        className='addToCart-btn'
      />
    </div>
  );
};

export default Card;
