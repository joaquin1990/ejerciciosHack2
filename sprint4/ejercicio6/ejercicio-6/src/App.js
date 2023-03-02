import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  function preventDefault(e) {
    e.preventDefault();
    if (number1 === "" || number2 === "") {
      setResult("Please, complete all the fields!");
    } else setResult("The result is: " + Number(number1 * number2));
  }

  return (
    <div className="App">
      <Form className="w-50 h-75 border rounded m-5 p-4" onSubmit={preventDefault}>
        <h3>Insert the data to Multiply:</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number 1</Form.Label>
          <Form.Control type="number" name="number1" value={number1} onChange={(event) => setNumber1(event.target.value)} placeholder="number 1..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number 2</Form.Label>
          <Form.Control type="number" name="number2" value={number2} onChange={(event) => setNumber2(event.target.value)} placeholder="number 2..." />
        </Form.Group>
        <Button type="submit" className="d-block my-3 btn-success" variant="primary">
          Multiply
        </Button>
      </Form>
      {result[0] === "P" ? <p className="ms-5 text-danger">{result}</p> : <p className="ms-5 text-success">{result}</p>}
    </div>
  );
}

export default App;
