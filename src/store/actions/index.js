import * as types from '../constants/actionTypes'

export const setTrack = (song) => ({type: types.TRACK_SET, song})
export const toogleTrack = (playing) => ({type: types.TRACK_PAUSE, playing})
export const addQueue = (song) => ({type: types.ADD_QUEUE, song})
