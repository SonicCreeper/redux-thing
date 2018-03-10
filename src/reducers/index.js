import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

// BEGIN (write your solution here)


export default combineReducers({tasks: handleActions({
  [actions.addTask](state, { payload: { text } }) {
    return [...state, text]
  }
},[]), text: handleActions({
  [actions.updateNewTaskText](state, { payload: { text } }) {
    return text
  }
}, '')})
// END
