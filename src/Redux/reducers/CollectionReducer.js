import * as actiontypes from "../actionTypes";

const initial = { 
  allCollections: [],
  searchedCollections: '',
  singleCollection: [],
  defaultCollections: []
}
export const collections = ( state = initial, action) => {
  switch (action.type) {
    case actiontypes.FETCH_COLLECTIONS:
      return {...state, allCollections: action.payload, defaultCollections: action.payload};
      case actiontypes.FETCH_SINGLE_COLLECTIONS:
        return {...state, singleCollection: action.payload};
      case actiontypes.SORT_BY_SEARCH:
        return {...state, searchedCollections: action.payload};
    default:
      return state;
  }
}

