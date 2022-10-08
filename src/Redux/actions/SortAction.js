import * as actiontypes from "../actionTypes";


export const sortBySearch = (search) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_SEARCH,
      payload: search
    })
  } catch (error) {
    console.log(error);
  }
}

