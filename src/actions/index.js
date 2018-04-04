import { createAction } from 'redux-actions';

export const addKeyWords = createAction('ADD_KEY_WORD')
export const clearKeyWords = createAction('CLEAR_KEY_WORDS')
export const removeKeyWord = createAction('REMOVE_KEY_WORD')
export const changePriceRange = createAction('CHANGE_PRICE_RANGE')