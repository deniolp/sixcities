import {combineReducers} from 'redux';

import {reducer as data} from './data/data';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
});
