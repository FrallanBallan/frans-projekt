import { IUnit } from '../../models/IUnit';
import Card from '../Card/Card';
import styles from './CardContainer.module.css';

interface CardContainerProps {
  units: IUnit[];
}

const CardContainer = ({ units }: CardContainerProps) => {
  return (
    <div className={styles.cardContainer}>
      {units.map((unit, i) => (
        <Card unit={unit} key={i} />
      ))}
    </div>
  );
};

export default CardContainer;
