import axios from 'axios';
import { IUnit } from '../../models/IUnit';

export const fetchAllWarhammer = async (): Promise<IUnit[]> => {
  const url = 'http://localhost:8008/warhammer';
  try {
    const response = await axios.get(url);
    const data = response.data.data;
    return data as IUnit[];
  } catch (error) {
    console.log('Error while fetchAllWarhammer()', error);
    return [];
  }
};
