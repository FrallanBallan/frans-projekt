import { useEffect, useState } from 'react';
import { fetchFactionUnits } from '../../utilities/FetchFactionUnits/fetchFactionUnits';
import { useParams } from 'react-router-dom';
import { IUnit } from '../../models/IUnit';
import CardContainer from '../../components/CardContainer/CardContainer';

const SpecificFactionpage = () => {
  const { factionName } = useParams<{ factionName: string }>();
  const [factionUnits, setFactionUnits] = useState<IUnit[]>([]);

  // fetchFactionUnits("Dwarfs")
  useEffect(() => {
    const loadSpecificFactionpage = async () => {
      if (factionName) {
        const fetchedFactionUnits = await fetchFactionUnits(factionName);
        setFactionUnits(fetchedFactionUnits);
      }
    };
    loadSpecificFactionpage();
  }, [factionName]);
  return (
    <>
      <h1>{factionName}</h1>

      <CardContainer units={factionUnits} />
    </>
  );
};

export default SpecificFactionpage;
