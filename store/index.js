import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import CategoryReducer from "./reducers/category.reducer";
import WinesReducer from "./reducers/wine.reducer";
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import MyWineReduce from "./reducers/myWine.reduce";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  wines: WinesReducer,
  cart: CartReducer,
  auth: AuthReducer,
  myWines:MyWineReduce,
});

export default createStore(RootReducer, applyMiddleware(thunk));