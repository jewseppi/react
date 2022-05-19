export const filterBySearch = (media, searchText) =>
  media.filter((el) => {
    const { trackName = "", artistName = "" } = el;

    const filterByTrack = trackName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const filterByArtist = artistName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (filterByTrack || filterByArtist) {
      return true;
    }

    return false;
  });

export default filterBySearch;
