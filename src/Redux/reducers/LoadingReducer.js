import * as actiontypes from "../actionTypes";

export const loadingReducer = ( state = false, action) => {
  switch (action.type) {
    case actiontypes.SET_LOADING:
      return  action.payload;
    default:
      return state;
  }
}

