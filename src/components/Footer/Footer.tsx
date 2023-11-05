import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#E2E2E2", maxHeight: "100%" }}
      className="footer-container mt-5 pt-3"
    >
      <Container>
        <Row >
          <Col>
            <h4 className="mb-2">Contacto</h4>
            <p className="mb-1">Mail: francoveggiani@gmail.com</p>
            <p>Numero de telefono: +54 261-123-4567</p>
          </Col>
          <Col>
            <h4>Redes sociales</h4>
            <a href="">Instagram</a><br />
            <a href="">Facebook</a>
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
};
