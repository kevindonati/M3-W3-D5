import { Container } from "react-bootstrap"
import StazioniRadio from "./radio/StazioniRadio"
import NuoviEpisodiRadio from "./nuovi-episodi-radio/NuoviEpisodiRadio"
import NuoveUscite from "./nuove-uscite/NuoveUscite"
import AltroDaEsplorare from "./altro-da-esplorare/AltroDaEsplorare"

const ContenitoreMain = () => {
  return (
    <Container fluid className="bg-black p-5 pb-0 mb-3">
      <h1 className="text-light border-bottom border-secondary">Novità</h1>
      <StazioniRadio />
      <h4 className="text-light mt-5">Nuovi episodi radio</h4>
      <NuoviEpisodiRadio />
      <h4 className="text-light mt-5 d-inline-block">Nuove uscite</h4>
      <i className="bi bi-chevron-right text-light ms-1"></i>
      <NuoveUscite />
      <h4 className="text-light mt-5 d-inline-block">Altro da esplorare</h4>
      <AltroDaEsplorare />
    </Container>
  )
}

export default ContenitoreMain
