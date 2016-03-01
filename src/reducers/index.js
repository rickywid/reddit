import { combineReducers } from 'redux';
import Topics from './reducers_topics';
import Comments from './reducers_comments';

const rootReducer = combineReducers({

	Topics: Topics,
	Comments: Comments

});

export default rootReducer;
