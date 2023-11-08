
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export const MainContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src="/card1.jpg" style={{maxWidth: "100%", height: "18rem"}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src="/card1.jpg" style={{maxWidth: "100%", height: "18rem"}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src="/card1.jpg" style={{maxWidth: "100%", height: "18rem"}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
