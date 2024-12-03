import { useEffect, useState } from 'react';
import { IUnit } from '../../models/IUnit';
import { useParams } from 'react-router-dom';
import { fetchOneWarhammer } from '../../utilities/FetchOne/fetchOneWarhammer';
import CardContainer from '../../components/CardContainer/CardContainer';

const Unitpage = () => {
  const { id } = useParams();
  const [unit, setUnit] = useState<IUnit[]>([]);

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

      {unit ? <CardContainer units={unit} /> : <div>No unit found</div>}
    </div>
  );
};

export default Unitpage;
