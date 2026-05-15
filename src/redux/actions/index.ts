import type { Dispatch } from "@reduxjs/toolkit"
import type { Fetch } from "../../interfaces/interfaces"

export const GET_SONG = "GET_SONG"
export const SET_CURRENT_SONG = "SET_CURRENT_SONG"
export const PLAY = "PLAY"
export const PAUSE = "PAUSE"
export const SET_VOLUME = "SET_VOLUME"

export const getSongAction = () => {
  return (dispatch: Dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=marracash",
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella response")
        }
      })
      .then((data) => {
        dispatch({
          type: GET_SONG,
          payload: data.data,
        })
      })
      .catch((err) => {
        console.log("errore nella fetch", err)
      })
  }
}

export const setSong = (song: Fetch) => ({
  type: SET_CURRENT_SONG,
  payload: song,
})

export const play = () => ({ type: PLAY })
export const pause = () => ({ type: PAUSE })

export const setVolume = (value: number) => ({
  type: SET_VOLUME,
  payload: value,
})
