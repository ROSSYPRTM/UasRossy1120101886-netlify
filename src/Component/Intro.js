import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-yellow d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">DRAMA DAN FILM TERBAIK 2022</div>
              <div className="title text-center">GRATIS 100%</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Welcome</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export  default Intro