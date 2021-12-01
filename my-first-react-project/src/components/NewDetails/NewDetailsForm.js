import "./NewDetailsForm.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function NewDetailsForm() {
  return (
    <div>
      <p>hi from NewDetailsForm</p>
      <div className='form'>
        <Container>
          <Row>
          <Stack gap={2}>
            <div>  
            <Col xl={12}>
              <label className='label'>To be countiued</label>{" "}
              <Button variant="success"> Dark </Button>{" "}
            </Col>
            </div>
            <div>
            <Col xl={12}>
              <input type="text" placeholder="type here"></input>
            </Col>
            </div>
            </Stack>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default NewDetailsForm;
