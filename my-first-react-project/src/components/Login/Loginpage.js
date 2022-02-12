import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

import "./LoginPage.css";

function LoginPage() {
  return (
    <div>
      <Container className="container">
        <Form className="form">
          <Row className="mb-3">
            <Col sm={4}>
              <h3>Login Page</h3>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={2}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>

            <Col sm={2}>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default LoginPage;
