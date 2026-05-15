import { Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Row className="bg-dark ps-5 ">
      <p className=" text-light">
        Italia <span className="text-secondary">|</span> {""}
        <span className="text-secondary">English(UK)</span>
      </p>
      <p className=" text-secondary mb-0">
        Copyright © 2024 <span className="text-light">Apple Inc.</span> Tutti i
        diritti riservati.
      </p>
      <p className=" text-light">
        Condizioni dei servizi internet{" "}
        <span className="text-secondary">|</span> {""}
        Apple Music e privacy {""}
        <span className="text-secondary">|</span> {""}
        Avviso sui cookie {""}
        <span className="text-secondary">|</span> {""}
        Supporto {""}
        <span className="text-secondary">|</span> {""}
        Feedback
      </p>
    </Row>
  )
}

export default Footer
