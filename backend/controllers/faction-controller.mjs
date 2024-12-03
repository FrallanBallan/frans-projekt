import { fetchData } from '../utilities/httpClient.mjs';

//?? BACKEND
export const loadFactionUnits = async (req, res) => {
  try {
    const { faction } = req.params;
    const result = await fetchData('/warhammer');
    const factionUnits = result.filter((unit) => unit.faction === faction);
    console.log(factionUnits);

    res.status(200).json({
      success: true,
      data: factionUnits,
      message: 'loadFactions successful',
    });
  } catch (error) {
    console.log('Fel i faction-controller, loadFactions');
    res.status(500).json({ success: false, message: `Error: ${error}` });
  }
};
