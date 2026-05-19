export const fetchData = async (searchInput) => {
  try {
    const url = `https://itunes.apple.com/search?term=${searchInput}&media=music`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const returnData = data.results.map((result) => {
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });
    return returnData;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};
