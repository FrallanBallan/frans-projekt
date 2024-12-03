import { fetchData } from '../utilities/httpClient.mjs';

export const loadUnitId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await fetchData('/warhammer');
    const foundUnit = result.filter((unit) => unit.id === id);
    console.log(foundUnit);
    res
      .status(200)
      .json({
        success: true,
        data: foundUnit,
        message: 'Successful fetching of loadUnitId',
      });
  } catch (error) {
    console.log(error);
    throw new Error({
      success: false,
      message: `Error while trying to loadUnitId()`,
    });
  }
};
