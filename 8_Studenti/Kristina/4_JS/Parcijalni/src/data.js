export const fetchData = async (searchTerm) => {
  try {
    const url = `https://itunes.apple.com/search?term=${searchTerm}&media=music`;
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
    return [];
  }
};
