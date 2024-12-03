import { fetchData } from '../utilities/httpClient.mjs';

// Controller for search functionality
export const searchWarhammerUnits = async (req, res) => {
  const { query } = req.query; // Extract the query parameter from the request

  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    // Example: Filter units based on whether their title includes the query (case-insensitive)
    const result = await fetchData('/warhammer');
    const searchedResult = result.filter((unit) =>
      unit.title.toLowerCase().includes(query.toLowerCase())
    );
    res.status(200).json({
      success: true,
      data: searchedResult,
      message: 'loadAllFactions() successful',
    });
  } catch (error) {
    throw new Error({
      success: false,
      status: 500,
      message: 'Error in searchWarhammerUnits() controller',
    });
  }
};
