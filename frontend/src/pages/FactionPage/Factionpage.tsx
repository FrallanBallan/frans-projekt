import axios from 'axios';
import { useEffect, useState } from 'react';
import FactionBanner from '../../components/FactionBanner/FactionBanner';
import styles from './Factionpage.module.css';

const Factionpage = () => {
  //Fetch all ? or create a specifc fetch for factions?
  //Filter faction name by all warhammer?
  //On click filter faction units -- på annan page? SINGLE RESPONSIBILITUY
  //SKAPA LINKS

  const [allFactions, setAllFactions] = useState<string[]>([]);

  const loadFactionpage = async () => {
    const url = 'http://localhost:8008/warhammer/factions';
    const response = await axios.get(url);
    console.log(response.data.data);
    const factionsArray = response.data.data;
    setAllFactions(factionsArray);
  };

  useEffect(() => {
    loadFactionpage();
  }, []);

  return (
    <div>
      <h1>Factionpage</h1>
      <div className={styles.factionWrap}>
        {allFactions.map((faction, i) => (
          <FactionBanner key={i} faction={faction} />
        ))}
      </div>
    </div>
  );
};

export default Factionpage;
