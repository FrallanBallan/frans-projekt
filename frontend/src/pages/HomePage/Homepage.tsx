import { useEffect, useState } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import { fetchAllWarhammer } from '../../utilities/FetchAll/fetchAllWarhammer';
import { IUnit } from '../../models/IUnit';

const Homepage = () => {
  const [allUnits, setAllUnits] = useState<IUnit[]>([]);

  useEffect(() => {
    const loadHomepage = async () => {
      try {
        const unitArray = await fetchAllWarhammer();
        setAllUnits(unitArray);
      } catch (error) {
        console.log('Error while: fetchAllWarhammer() in loadHomepage()');
      }
    };
    loadHomepage();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <CardContainer units={allUnits} />
    </div>
  );
};

export default Homepage;
