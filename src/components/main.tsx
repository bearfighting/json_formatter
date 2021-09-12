import { Form, Button, Container } from 'react-bootstrap'

function Main() {
  return (
    <Container fluid>
      <Form style={{ height: "45vh" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Json</Form.Label>
          <Form.Control type="text" as="textarea" placeholder="Json" style={{ height: "90%" }} />
        </Form.Group>
        <Button variant="primary" type="Validate">
          Validate
        </Button>
      </Form>
      <Form style={{ height: "45vh" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ height: "100%" }}>
          <Form.Label>Enter Json</Form.Label>
          <Form.Control type="text" as="textarea" placeholder="Json" style={{ height: "90%" }} />
        </Form.Group>
      </Form>
    </Container >

  )
}

export default Main;
