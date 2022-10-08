import { fetchCollectionApi,fetchSingleCollectionApi } from "../../Api";
import * as actiontypes from "../actionTypes";
import { setError } from "./Error";
import { setLoading } from "./Loading";

export const fetchCollections = () => async(dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchCollectionApi();
    dispatch({
      type: actiontypes.FETCH_COLLECTIONS,
      payload: data
    })
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setError('Connection failed, Please try again'));
  }
}
export const fetchSingleCollection = (id) => async(dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchSingleCollectionApi(id);
    dispatch({
      type: actiontypes.FETCH_SINGLE_COLLECTIONS,
      payload: data
    })
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setError('Connection failed, Please try again'));
  }
}
