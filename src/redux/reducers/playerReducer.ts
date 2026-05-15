import { type player } from "../../interfaces/interfaces"
import { PAUSE, PLAY, SET_CURRENT_SONG, SET_VOLUME } from "../actions"

const initialState: player = {
  currentSong: null,
  isPlaying: false,
  volume: 70,
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      }

    case PLAY:
      return {
        ...state,
        isPlaying: true,
      }

    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      }

    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      }

    default:
      return state
  }
}

export default playerReducer
