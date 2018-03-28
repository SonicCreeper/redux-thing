import { createAction } from 'redux-actions'; // eslint-disable-line

export const addKeyWords = createAction('ADD_KEY_WORD');
export const clearKeyWords = createAction('CLEAR_KEY_WORDS')
export const removeKeyWord = createAction('REMOVE_KEY_WORD')