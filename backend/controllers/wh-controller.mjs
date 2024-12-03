import { fetchData } from '../utilities/httpClient.mjs';

//?? BACKEND
export const loadWarhammer = async (req, res) => {
  try {
    const result = await fetchData('/warhammer');
    // console.log(result);
    res.status(200).json({
      success: true,
      data: result,
      message: 'loadWarhammer successful',
    });
  } catch (error) {
    console.log('Fel i wh-controller, loadWarhammer');
    res.status(500).json({ success: false, message: `Error: ${error}` });
  }
};
