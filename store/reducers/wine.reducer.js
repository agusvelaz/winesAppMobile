import { WINES } from '../../data/wines';
import { SELECT_WINE, FILTER_WINES } from '../actions/wine.actions';

const initialState = {
  list: WINES,
  filteredWines: [],
  selectedID: null,
};

const WinesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_WINE:
      return {
        ...state,
        selectedID: action.wineID,
      };
    case FILTER_WINES:
      return {
        ...state,
        filteredWines: state.list.filter(item => item.category === action.categoryID)
      }
    default:
      return state;
  }
}

export default WinesReducer;