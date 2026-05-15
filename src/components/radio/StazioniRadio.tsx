import { Row } from "react-bootstrap"
import StazioneRadioChill from "../radio/StazioneRadioChill"
import StazioneRadioMusicaUno from "../radio/StazioneRadioMusicaUno"

const StazioniRadio = () => {
  return (
    <Row className="flex-nowrap overflow-x-auto g-3 flex-lg-wrap">
      <StazioneRadioChill />
      <StazioneRadioMusicaUno />
    </Row>
  )
}

export default StazioniRadio
