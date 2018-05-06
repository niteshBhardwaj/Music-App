import {TRACK_SET, TRACK_PAUSE} from '../constants/actionTypes'
let defaultTrack = {};

try {
  defaultTrack.song = JSON.parse(localStorage.getItem('last_track'));
} catch(e) {}

export default function Track(state=defaultTrack, action) {
  switch (action.type) {
    case TRACK_SET:
      return saveTrack({
        ...state,
        song: {
          ...action.song
        },
        playing: true
      });
    case TRACK_PAUSE:
      return saveTrack({
        ...state,
        playing: action.playing
      });
    default:
      return state;
  }
}

const saveTrack = (obj) => {
  localStorage.setItem('last_track', JSON.stringify(obj.song))
  return obj;
}