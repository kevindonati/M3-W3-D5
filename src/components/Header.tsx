import { useState } from "react"
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

const Header = () => {
  const [volume, setVolume] = useState<number>(0)

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Row className="w-100">
          <Col xs={4} className="d-flex justify-content-center">
            <Nav className="d-none d-lg-flex">
              <i className="bi bi-shuffle mx-2 text-secondary fs-6 align-self-center"></i>
              <i className="bi bi-skip-backward-fill mx-2 text-secondary fs-6 align-self-center"></i>
              <i className="bi bi-play-fill mx-2 text-secondary fs-2 py-0 align-self-center"></i>
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
                className="w-25"
                value={volume}
                max={100}
                onChange={(e) => setVolume(Number(e.target.value))}
                id="progress-bar"
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
