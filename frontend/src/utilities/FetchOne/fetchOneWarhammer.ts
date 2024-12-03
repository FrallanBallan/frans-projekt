import axios from 'axios';
import { IUnit } from '../../models/IUnit';

export const fetchOneWarhammer = async (id: string): Promise<IUnit[]> => {
  const url = `http://localhost:8008/warhammer/unit/${id}`;
  try {
    const response = await axios.get(url);
    const unit = response.data.data || response.data;
    return unit as IUnit[];
  } catch (error) {
    console.log('error while: fetchOneWarhammer()');
    return [];
  }
};
