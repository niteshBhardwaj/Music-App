import {combineReducers} from 'redux'
import track from './track'
import queue from './queue'

export default combineReducers({
  track,
  queue
})
