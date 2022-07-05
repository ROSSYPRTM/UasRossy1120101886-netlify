import { Card, Container, Row, Col, Image } from "react-bootstrap"
import StrangeImage from "../assets/IMAGE/MS/Strange.jpg"
import anyaImage from "../assets/IMAGE/Anime/anya.jpg"
import HealerImage from "../assets/IMAGE/DK/Healer.jpg"
import alarmImage from "../assets/IMAGE/DK/alarm.jpg"
import AmerikaImage from "../assets/IMAGE/MS/Amerika.jpg"
import ThorImage from "../assets/IMAGE/MS/Thor.jpg"
import SpiderManImage from "../assets/IMAGE/MS/SpiderMan.jpg"
import AvengersImage from "../assets/IMAGE/MS/Avengers.jpg"
import VenomImage from "../assets/IMAGE/MS/Venom.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h2 className="text-white">TRENDING SAAT INI </h2>
                <br />
                <Row>
                    <Col md={3} className="movieWrapper" id="Trending">
                        <Card className="movieImage">
                            <Image 
                            src={StrangeImage} 
                            alt="Strange Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Dr.Strange</Card.Title>
                                <Card.Text className="Text-left">
                                    Superhero
                                </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 2h 6m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={anyaImage} 
                            alt="anya Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">SPY X FAMILY</Card.Title>
                                <Card.Text className="Text-left">
                                    Anime - Action 
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                 Durasi 29m 16s</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
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
                                Action
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 1h 12m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
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
                                Romance
                                </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 1h 8m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <br />
                    <br />
                    <h3 className="text-white ">Marvel Cinematic</h3>
                    <br />
                    <br />
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={AmerikaImage} 
                            alt="Amerika Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Capt.Amerika</Card.Title>
                                <Card.Text className="Text-left">
                                 Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 1h 14m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={ThorImage} 
                            alt="Thor Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">THOR</Card.Title>
                                <Card.Text className="Text-left">
                                Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 2h 10m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={SpiderManImage} 
                            alt="SpiderMan Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Spider-Man</Card.Title>
                                <Card.Text className="Text-left">
                                 Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 1h 30m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={AvengersImage} 
                            alt="Avengers Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">The Avengers</Card.Title>
                                <Card.Text className="Text-left">
                                 Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 2h 46m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={StrangeImage} 
                            alt="Strange Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Dr.Strange</Card.Title>
                                <Card.Text className="Text-left">
                                 Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 2h 6m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="movieWrapper">
                        <Card className="movieImage">
                            <Image 
                            src={VenomImage} 
                            alt="Venom Movies" 
                            className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light text-center">
                                <Card.Title className="Text-center">Venom</Card.Title>
                                <Card.Text className="Text-left">
                                 Superhero
                                 </Card.Text>
                                <Card.Text className="Text-left"> 
                                Durasi 1h 30m</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending
