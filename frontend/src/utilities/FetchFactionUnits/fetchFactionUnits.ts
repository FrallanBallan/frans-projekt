import axios from 'axios';
import { IUnit } from '../../models/IUnit';

export const fetchFactionUnits = async (faction: string): Promise<IUnit[]> => {
  const url = `http://localhost:8008/warhammer/factions/${faction}`;
  try {
    const response = await axios.get(url);
    const fetchedUnits: IUnit[] = response.data.data;

    return fetchedUnits;
  } catch (error) {
    console.log(error);
    return [];
  }
};
//http://localhost:8008/warhammer/factions/High%20Elves
//Ger mig all från en factions
