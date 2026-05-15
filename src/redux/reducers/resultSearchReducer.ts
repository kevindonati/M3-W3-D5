import { type Fetch } from "../../interfaces/interfaces"
import { GET_SONG } from "../actions"

interface fetchState {
  songs: Fetch[]
}

interface GetSongAction {
  type: typeof GET_SONG
  payload: Fetch[]
}

const initialState: fetchState = {
  songs: [],
}

const resultSearchReducer = (state = initialState, action: GetSongAction) => {
  switch (action.type) {
    case GET_SONG: {
      return {
        ...state,
        songs: action.payload,
      }
    }

    default:
      return state
  }
}

export default resultSearchReducer
