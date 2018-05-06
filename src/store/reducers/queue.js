import {ADD_QUEUE} from '../constants/actionTypes'
let defaultQueue = [];

try {
  defaultQueue = JSON.parse(localStorage.getItem('queue_list')) || [];
} catch(e) {}

export default function Queue(state=defaultQueue, action) {
  switch (action.type) {
    case ADD_QUEUE:
      let index = state.findIndex(song => song.id === action.song.id);
      if(index !== -1) return state;
      return saveTrack([
        ...state,
        {...action.song}
    ]);
    default:
      return state;
  }
}

const saveTrack = (array) => {
  localStorage.setItem('queue_list', JSON.stringify(array))
  return array;
}