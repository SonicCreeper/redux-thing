import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
//import * as actions from '../actions'; // eslint-disable-line
import data from '../data/studio.json'

const studios = (state = {}, action) => {
	return data.studios
}

export default combineReducers({studios})
// END
