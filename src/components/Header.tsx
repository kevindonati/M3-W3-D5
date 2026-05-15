import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap"

import logoApple from "../assets/logos/apple.svg"
import { useDispatch, useSelector } from "react-redux"

import { type RootState } from "../redux/store"
import { useEffect, useRef } from "react"
import type { AppDispatch } from "../redux/store"
import { pause, play, setVolume } from "../redux/actions"

const Header = () => {
  const { currentSong, isPlaying, volume } = useSelector(
    (state: RootState) => state.player,
  )
  const dispatch = useDispatch<AppDispatch>()

  const inputAudio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!currentSong?.preview) return

    if (inputAudio.current) {
      inputAudio.current.pause()
    }

    inputAudio.current = new Audio(currentSong.preview)
    inputAudio.current.volume = volume / 100
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

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Row className="w-100">
          <Col xs={4} className="d-flex justify-content-center">
            <Nav className="d-none d-lg-flex">
              <i className="bi bi-shuffle mx-2 text-secondary fs-6 align-self-center"></i>
              <i className="bi bi-skip-backward-fill mx-2 text-secondary fs-6 align-self-center"></i>
              {isPlaying ? (
                <i
                  className="bi bi-pause-fill mx-2 text-secondary fs-2 py-0 align-self-center"
                  onClick={() => {
                    dispatch(pause())
                  }}
                ></i>
              ) : (
                <i
                  className="bi bi-play-fill mx-2 text-secondary fs-2 py-0 align-self-center"
                  onClick={() => {
                    dispatch(play())
                  }}
                ></i>
              )}
              <i className="bi bi-fast-forward-fill mx-2 text-secondary fs-6 align-self-center"></i>
              <i className="bi bi-repeat mx-2 text-secondary fs-6 align-self-center"></i>
            </Nav>
          </Col>
          <Col
            xs={4}
            className="bg-secondary d-flex align-items-center justify-content-center d-none d-lg-flex"
          >
            <Image
              style={{ filter: "invert(1)" }}
              src={logoApple}
              alt="logo Apple"
              className="h-50"
            />
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between d-none d-lg-flex"
          >
            <Nav className="justify-content-center flex-grow-1">
              <i className="bi bi-volume-down-fill mx-3 text-secondary fs-4 align-self-center"></i>
              <audio></audio>
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
            </Nav>
            <Nav>
              <Button
                type="button"
                variant="danger"
                className="d-flex align-items-center"
              >
                <i className="bi bi-person-fill me-1 text-light fs-4"></i>
                Accedi
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Header
