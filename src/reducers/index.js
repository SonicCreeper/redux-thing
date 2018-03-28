import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions'; // eslint-disable-line
import data from '../data/studio.json'

const studios = (state = {}, action) => {
	return data.studios
}

const keyWords = handleActions({
  [actions.addKeyWords](state, { payload: {text} }) {
  	const newKeyWords = text.split(' ').filter(word => !state.includes(word));
    return [...state,...newKeyWords];
  },
  [actions.clearKeyWords](state) {
  	return [];
  },
  [actions.removeKeyWord](state, { payload: word }) {
  	return _.without(state, word)
  },
}, []);

export default combineReducers({
	studios, 
	keyWords,
	form: formReducer,
	})
// END
