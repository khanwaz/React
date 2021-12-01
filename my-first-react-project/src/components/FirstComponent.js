import NewDetailsForm from "./NewDetails/NewDetailsForm";
import Button from "react-bootstrap/Button";
function FirstComponent() {
  return (
    <div>
      <Button variant="dark">Click me</Button>
      <p> This is the First Component </p>
      <NewDetailsForm></NewDetailsForm>
    </div>
  );
}
export default FirstComponent;
