import { Col, Row, Image } from "react-bootstrap"

// import { type Schema } from "../../interfaces/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import {
  getSongAction,
  pause,
  play,
  setSong,
  setVolume,
} from "../../redux/actions"
import { type AppDispatch, type RootState } from "../../redux/store"

const NuoveUscite = () => {
  const dispatch = useDispatch<AppDispatch>()
  const canzoni = useSelector((state: RootState) => {
    return state.resultSearch.songs
  })
  const { currentSong, isPlaying, volume } = useSelector(
    (state: RootState) => state.player,
  )

  const inputAudio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!currentSong?.preview) return

    if (inputAudio.current) {
      inputAudio.current.pause()
    }

    inputAudio.current = new Audio(currentSong.preview)
    inputAudio.current.volume = volume / 100

    if (isPlaying) {
      inputAudio.current.play()
    }
  }, [currentSong])

  useEffect(() => {
    if (!inputAudio.current) return

    if (isPlaying) {
      inputAudio.current.play()
    } else {
      inputAudio.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (inputAudio.current) {
      inputAudio.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    dispatch(getSongAction())
  }, [dispatch])

  return (
    <>
      <Row className="g-3 flex-nowrap overflow-x-auto flex-lg-wrap">
        {canzoni.slice(1, 6).map((p) => (
          <Col key={p.id} xs={6} sm={4} md={3} lg>
            <Image
              src={p.album.cover_big}
              className="w-100"
              rounded
              onClick={() => {
                dispatch(setSong(p))
                dispatch(play())
              }}
            />
            <div className="d-flex justify-content-between">
              <p className="text-light mb-0">{p.title}</p>
              {p.explicit_lyrics ? (
                <i className="bi bi-explicit-fill text-secondary"></i>
              ) : (
                ""
              )}
            </div>
            <p className="text-secondary">{p.artist.name}</p>
          </Col>
        ))}
      </Row>
      <Row className="g-3 flex-nowrap overflow-x-auto flex-lg-wrap">
        {canzoni.slice(10, 15).map((p) => (
          <Col key={p.id} xs={6} sm={4} md={3} lg>
            <Image
              src={p.album.cover_big}
              className="w-100"
              rounded
              onClick={() => {
                dispatch(setSong(p))
                dispatch(play())
              }}
            />
            <div className="d-flex justify-content-between">
              <p className="text-light mb-0">{p.title}</p>
              {p.explicit_lyrics ? (
                <i className="bi bi-explicit-fill text-secondary"></i>
              ) : (
                ""
              )}
            </div>
            <p className="text-secondary">{p.artist.name}</p>
          </Col>
        ))}
      </Row>
      {currentSong && (
        <div className="position-fixed bottom-0 start-0 w-100 bg-black text-light d-flex align-items-center justify-content-between px-3 py-2 z-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={currentSong.album.cover_small}
              alt="cover"
              width={50}
              height={50}
              style={{ borderRadius: 8 }}
            />
            <div>
              <div className="fw-bold">{currentSong.title}</div>
              <small className="text-secondary">
                {currentSong.artist.name}
              </small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-shuffle mx-2 text-secondary fs-6 align-self-center"></i>
            <i className="bi bi-skip-backward-fill mx-2 text-secondary fs-6 align-self-center"></i>
            {isPlaying ? (
              <i
                className="bi bi-pause-fill fs-1"
                onClick={() => {
                  dispatch(pause())
                }}
              ></i>
            ) : (
              <i
                className="bi bi-play-fill fs-1"
                onClick={() => {
                  dispatch(play())
                }}
              ></i>
            )}
            <i className="bi bi-fast-forward-fill mx-2 text-secondary fs-6 align-self-center"></i>
            <i className="bi bi-repeat mx-2 text-secondary fs-6 align-self-center"></i>
          </div>
          <div className="d-flex">
            <i className="bi bi-volume-down-fill mx-3 text-secondary fs-4 align-self-center"></i>

            <input
              type="range"
              className="w-75"
              value={volume}
              max={100}
              onChange={(e) => {
                const val = Number(e.target.value)

                dispatch(setVolume(val))

                if (inputAudio.current) {
                  inputAudio.current.volume = val / 100
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default NuoveUscite
