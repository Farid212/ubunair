import { Container, Row, Col } from 'react-bootstrap';
import RetroCard from '../components/RetroCard'

const HomePage = () =>(
    <Container>
        <div>
            <header>
                <h1 className="text-center">Home Page</h1>
            </header>
            <main>
                <Row className="d-flex justify-content-around">
                    <Col className="d-flex justify-content-around m-3">
                        <RetroCard 
                            href="google.com"
                            targetBlank={false}
                            title="Card Title" 
                            subTitle="SubTitle"
                            cardText="Some quick example text to build on the card title and make up the bulk of
                            the card's content."
                        />
                    </Col>
                    <Col className="d-flex justify-content-around m-3">
                        <RetroCard 
                            href="google.com"
                            targetBlank={false}
                            title="Card Title" 
                            subTitle="SubTitle"
                            cardText="Some quick example text to build on the card title and make up the bulk of
                            the card's content."
                        />
                    </Col>
                </Row>
            </main>
        </div>
    </Container>
)

export default HomePage