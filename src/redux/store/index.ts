import { combineReducers, configureStore } from "@reduxjs/toolkit"
import resultSearchReducer from "../reducers/resultSearchReducer"
import playerReducer from "../reducers/playerReducer"

const store = configureStore({
  reducer: combineReducers({
    resultSearch: resultSearchReducer,
    player: playerReducer,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
