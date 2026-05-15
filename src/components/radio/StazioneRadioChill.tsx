import { Col, Image } from "react-bootstrap"
import radioChill from "@/assets/images/1a.png"

const StazioneRadioChill = () => {
  return (
    <Col xs={8} lg={6}>
      <p className="fw-bold text-secondary mb-0">NUOVA STAZIONE RADIO</p>
      <p className=" text-light">
        Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
      </p>
      <Image src={radioChill} className="w-100 mt-3" rounded />
    </Col>
  )
}

export default StazioneRadioChill
