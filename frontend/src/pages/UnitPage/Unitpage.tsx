import { useEffect, useState } from 'react';
import { IUnit } from '../../models/IUnit';
import { useParams } from 'react-router-dom';
import { fetchOneWarhammer } from '../../utilities/FetchOne/fetchOneWarhammer';
import CardContainer from '../../components/CardContainer/CardContainer';
import styles from './Unitpage.module.css';

const Unitpage = () => {
  const { id } = useParams();
  const [unit, setUnit] = useState<IUnit[]>([]);
  console.log(unit);

  useEffect(() => {
    const loadUnitpage = async () => {
      try {
        if (id) {
          const oneUnit = await fetchOneWarhammer(id);
          setUnit(oneUnit);
        } else {
          console.log(
            'did not find id, loadUnitPage() + fetchOneWarhammer(id)'
          );
        }
      } catch (error) {
        console.log('error in loadUnitPage', error);
      }
    };
    loadUnitpage();
  }, [id]);
  return (
    <div>
      <h1>Unitpage</h1>

      {unit ? (
        <div className={styles.unitDetails}>
          <CardContainer units={unit} />
          {unit.map((item, index) => (
            <span key={index}>
              <p>Availability: {item.inStock} units in stock</p>
              <hr />
              <p>Description: Very beautiful, but very expensive</p>
            </span>
          ))}
        </div>
      ) : (
        <div>No unit found</div>
      )}
    </div>
  );
};

export default Unitpage;
