import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import { Dropdown } from "react-bootstrap";

import "./DetailsPage.css";

function DetailsPage() {
  return (
    <div>
      <Container className="container">
        <Form className="form">
          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control placeholder="Enter your name" />
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>DOB</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Control placeholder="Enter DOB" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Qualification</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Dropdown>
                <Form.Group as={Col} controlId="formGridQualification">
                  <Dropdown>
                    <Dropdown.Toggle>Select the Qualification</Dropdown.Toggle>
                  </Dropdown>
                </Form.Group>
              </Dropdown>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Occupation</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridOccupation">
                <Form.Control type="text" placeholder="Enter Your Occupation" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Contact Number</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridContactNmber">
                <Form.Control type="number" placeholder="Contact Number" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Address</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Address 2</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridCity">
                <Dropdown>
                  <Dropdown.Toggle>Select the City</Dropdown.Toggle>
                </Dropdown>
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridState">
                <Dropdown>
                  <Dropdown.Toggle>Select the State</Dropdown.Toggle>
                </Dropdown>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Country</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridCountry">
                <Dropdown>
                  <Dropdown.Toggle>Select the Country</Dropdown.Toggle>
                </Dropdown>
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Zip Code</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control type="number" placeholder="Enter your Zip code" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Father Name</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridFatherName">
                <Form.Control placeholder="Enter your father name" />
              </Form.Group>
            </Col>

            <Col sm={2}>
              <Form.Group as={Col}>
                <Form.Label>Mother Name</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridMotherName">
                <Form.Control placeholder="Enter your mother name" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm={3}>
              <Form.Group as={Col} controlId="formGridSubmit">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default DetailsPage;
