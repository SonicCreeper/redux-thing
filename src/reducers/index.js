import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import data from '../data/studio.json'

const studios = (state = {}, action) => {
	return data.studios
}

const keyWords = handleActions({
  [actions.addKeyWords](state, { payload: text }) {
  	const newKeyWordsArr = text.split(' ').filter(word => !state.includes(word));
    const newKeyWordsArrLowerCase = newKeyWordsArr.map(item => item.toLowerCase())
    const newKeyWordsSet = new Set();
    newKeyWordsSet.add(...newKeyWordsArrLowerCase);
    return [...state,...newKeyWordsSet];
  },
  [actions.clearKeyWords](state) {
  	return [];
  },
  [actions.removeKeyWord](state, { payload: word }) {
  	return _.without(state, word)
  },
}, []);

const priceRange = handleActions({
	[actions.changePriceRange](state, {payload: prices}) {
		return prices
	}
}, [1000,2000])

export default combineReducers({
	studios, 
	keyWords,
	priceRange,
	})
