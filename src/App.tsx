import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Header from "./components/Header"
import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "./components/Sidebar"
import "./App.css"
import ContenitoreMain from "./components/ContenitoreMain"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="px-0 bg-dark overflow-hidden">
        <Row className="g-0">
          <Col xs={0} lg={2}>
            <Sidebar />
          </Col>
          <Col>
            <Header />
            <ContenitoreMain />
            <Footer />
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

export default App
