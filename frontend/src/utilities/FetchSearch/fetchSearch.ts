import axios from 'axios';
import { IUnit } from '../../models/IUnit';

export const fetchSearch = async (searchQuery: string): Promise<IUnit[]> => {
  const url = `http://localhost:8008/warhammer/search?query=${searchQuery}`;
  try {
    const response = await axios.get(url);

    const fetchedUnits: IUnit[] = response.data.data;
    return fetchedUnits;
  } catch (error) {
    console.error('Error in fetchSearch:', error);
    throw error;
  }
};
