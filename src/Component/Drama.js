import { Card, Container, Row, Col, Image } from "react-bootstrap"
import alarmImage from "../assets/IMAGE/DK/alarm.jpg"
import HealerImage from "../assets/IMAGE/DK/Healer.jpg"
import K2Image from "../assets/IMAGE/DK/K2.jpg"
import SnowdropImage from "../assets/IMAGE/DK/Snowdrop.jpg"
import againImage from "../assets/IMAGE/DK/again.jpg"
import LiveonImage from "../assets/IMAGE/DK/Liveon.jpg"

const Drama = () => {
    return (
        <div>
            <Container>
                <br />
                <h3 className="text-white">K-Drama</h3>
                <br />
                <Row>
                    <Col md={2} className="movieWrapper" id="Drama">
                        <Card className="movieImage">
                            <Image 
                            src={alarmImage} 
                            alt="alarm Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Love Alarm</Card.Title>
                                <Card.Text className="Text-left">
                                    Durasi 1h 8m
                                </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-9</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={HealerImage} 
                            alt="Healer Movies"
                            className="images" 
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Healer</Card.Title>
                                <Card.Text className="Text-left">
                                Durasi 1h 12m
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-16</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={K2Image} 
                            alt="K2 Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">K2</Card.Title>
                                <Card.Text className="Text-left">
                                Durasi 59m 48s
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-16</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={SnowdropImage} 
                            alt="Snowdrop Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Snowdrop</Card.Title>
                                <Card.Text className="Text-left">
                                Durasi 1h 2m
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-16</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={againImage} 
                            alt="again Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">18+ Again</Card.Title>
                                <Card.Text className="Text-left">
                                Durasi 57m 24s
                                </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-16</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={LiveonImage} 
                            alt="Liveon Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Liveon</Card.Title>
                                <Card.Text className="Text-left">
                                Durasi 31m 28s
                                </Card.Text>
                                <Card.Text className="Text-left"> 
                                Episodes 1-12</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Drama
