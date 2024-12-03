import { fetchData } from '../utilities/httpClient.mjs';

export const loadAllFactions = async (req, res) => {
  try {
    const result = await fetchData('/warhammer');

    const factions = result.map((item) => item.faction);

    const uniqueFactions = [...new Set(factions)];

    res.status(200).json({
      success: true,
      data: uniqueFactions,
      message: 'loadAllFactions() successful',
    });
  } catch (error) {
    throw new Error({
      success: false,
      status: 500,
      message: 'Error in loadAllFactions() controller',
    });
  }
};
