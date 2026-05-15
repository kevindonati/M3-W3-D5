import { Col, Row } from "react-bootstrap"

const AltroDaEsplorare = () => {
  const valori: string[] = [
    "Esplora per genere",
    "Worldwide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ]
  return (
    <Row xs={1} md={3} className="g-3 pb-5">
      {valori.map((v, i) => {
        return (
          <Col key={i + 1}>
            <div className="d-flex justify-content-between align-items-center text-danger rounded-2 bg-dark p-3">
              <p className="mb-0">{v}</p>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default AltroDaEsplorare
