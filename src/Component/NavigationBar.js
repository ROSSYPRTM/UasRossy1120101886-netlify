import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = (promps) => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                <Navbar.Brand href="/">OcchyFilms</Navbar.Brand>
                <Nav>
                 <Nav.Link href="#Trending">Trending</Nav.Link>
                 <Nav.Link href="#Trending">Marvel Cinematic</Nav.Link>
                 <Nav.Link href="#Drama">K-drama</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>   
    )
}



export default NavigationBar