import { Col, Image } from "react-bootstrap"
import musicaUno from "@/assets/images/1b.png"

const StazioneRadioMusicaUno = () => {
  return (
    <Col xs={8} lg={6}>
      <p className="fw-bold text-secondary mb-0">NUOVA STAZIONE RADIO</p>
      <p className=" text-light">Ecco la nuova casa della musica latina</p>
      <Image src={musicaUno} className="w-100 mt-3" rounded />
    </Col>
  )
}

export default StazioneRadioMusicaUno
