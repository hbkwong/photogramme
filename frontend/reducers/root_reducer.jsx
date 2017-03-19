import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import profileReducer from './profile_reducer';
import photoReducer from './photo_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  photo: photoReducer
});

export default rootReducer;
