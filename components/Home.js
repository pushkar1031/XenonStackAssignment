import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

export function Home() {
  return (
    <Container fluid className="text-center mt-2">
      <Alert variant="primary">
        <h1>Welcome to Orion School</h1>
      </Alert>
      <p>
        {" "}
        <h4>Unlocking Knowledge, Shaping Futures.</h4>
      </p>

      <Card>
        <Card.Img
          variant="top"
          src="\images\home.jpg"
          width={500}
          height={600}
        />
      </Card>
      <Footer></Footer>
    </Container>
  );
}
