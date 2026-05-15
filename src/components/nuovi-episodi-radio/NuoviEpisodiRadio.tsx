import { Col, Image, Row } from "react-bootstrap"

import primaFoto from "@/assets/images/2a.png"
import secondaFoto from "@/assets/images/2b.png"
import terzaFoto from "@/assets/images/2c.png"
import quartaFoto from "@/assets/images/2d.png"
import quintaFoto from "@/assets/images/2e.png"
import { type Scheda } from "../../interfaces/interfaces"

const NuoviEpisodiRadio = () => {
  const schede: Scheda[] = [
    { id: 1, title: "Prólogo con Abuelo", image: primaFoto, explicit: true },
    { id: 2, title: "The Wanderer", image: secondaFoto, explicit: false },
    {
      id: 3,
      title: "Michael Bublé & Carly Pearce",
      image: terzaFoto,
      explicit: false,
    },
    {
      id: 4,
      title: "Stephan Moccio: The Zane Lowe interview",
      image: quartaFoto,
      explicit: false,
    },
    {
      id: 5,
      title: "Chart Spotlight: Julia Michaels",
      image: quintaFoto,
      explicit: false,
    },
  ]

  return (
    <Row className="g-3 flex-nowrap overflow-x-auto flex-lg-wrap">
      {schede.map((s) => (
        <Col key={s.id} xs={6} sm={4} md={3} lg>
          <Image src={s.image} className="w-100" rounded />
          <div className="d-flex justify-content-between">
            <p className="text-secondary">{s.title}</p>
            {s.explicit && (
              <i className="bi bi-explicit-fill text-secondary"></i>
            )}
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default NuoviEpisodiRadio
