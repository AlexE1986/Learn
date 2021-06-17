import { combineReducers } from 'redux';
import basket from './basket';
import storage from './storage';
import search from './search';
import filterCat from './filterCat';

export default combineReducers({
   basket,
   storage,
   search,
   filterCat
});