import { combineReducers } from "redux";
import { collections } from "./CollectionReducer";
import { loadingReducer } from './LoadingReducer';
import { errorReducer } from './ErrorReducer';

export const rootReducers = combineReducers({
  collections,
  loadingReducer,
  errorReducer,
});