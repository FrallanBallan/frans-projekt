// BASE_URL=http://localhost:6020
//Steg 2

//?? FRONTEND - Kommunicerar med !!BACKEND!!
export const fetchData = async (endpoint, query) => {
  const url = query
    ? `${process.env.BASE_URL}${endpoint}?query=${query}`
    : `${process.env.BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log('Response OK, Results: ', data);
      return data;
    } else {
      throw new Error(
        `fetchData(${endpoint}) lyckades inte hitta endpoint: ${response.status}`
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Fel i httpClient, fetchData: error = ${error}`);
  }
};
