import {combineReducers} from 'redux';
import EntriesList from './entries-list-reducer';

const allReducers = combineReducers({
    entriesList:EntriesList
});

export default allReducers
