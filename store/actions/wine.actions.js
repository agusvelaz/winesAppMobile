export const SELECT_WINE = 'SELECT_WINE';
export const FILTER_WINES = 'FILTER_WINES';

export const selectWine = (wineID) => ({
  type: SELECT_WINE,
  wineID,
});

export const filterWines = (categoryID) => ({
  type: FILTER_WINES,
  categoryID,
})