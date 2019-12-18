//Core
import { combineReducers } from 'redux';

//Reducers
import { catalogReducer as catalog } from '../sagas/catalog/reducer';

const rootReducer = combineReducers({
    catalog,
});

export default rootReducer
