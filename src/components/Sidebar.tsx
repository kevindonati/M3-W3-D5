import { Container, Image, Row, Col, InputGroup, Form } from "react-bootstrap"
import logoAppleMusic from "../assets//logos/music.svg"

const Sidebar = () => {
  return (
    <Container fluid className=" px-4">
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center p-0"
        >
          <i className="bi bi-list text-danger fs-1 d-lg-none"></i>
          <Image
            style={{ filter: "invert(1)" }}
            src={logoAppleMusic}
            alt="logo Apple"
            className="h-50 mt-lg-4"
          />
          <p className="text-danger fw-bold mb-0 d-lg-none">Accedi</p>
        </Col>
        <Col xs={12} className="d-none d-lg-block">
          <InputGroup size="sm" className="my-4 ">
            <InputGroup.Text
              id="basic-addon1"
              className="bg-black border-secondary"
            >
              <i className="bi bi-search text-danger"></i>
            </InputGroup.Text>
            <Form.Control
              id="input-cerca"
              className="bg-black border-secondary border-start-0 ps-0"
              placeholder="Cerca"
              aria-label="cerca"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs={12} className="d-none d-lg-block">
          <div className="d-flex align-content-center rounded-2">
            <i className="bi bi-house-door-fill text-danger fs-5"></i>
            <p className="text-light m-0 ms-2 align-self-center">Home</p>
          </div>
        </Col>
        <Col xs={12} className="d-none d-lg-block">
          <div className="d-flex align-content-center rounded-2">
            <i className="bi bi-grid text-danger fs-5"></i>
            <p className="text-light m-0 ms-2 align-self-center">Novità</p>
          </div>
        </Col>
        <Col xs={12} className="d-none d-lg-block">
          <div className="d-flex align-content-center rounded-2">
            <i className="bi bi-broadcast text-danger fs-5"></i>
            <p className="text-light m-0 ms-2 align-self-center">Radio</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
