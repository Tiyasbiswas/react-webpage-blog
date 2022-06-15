import { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import './App.css';

function App() {
  const [username ,setUser]= useState([]);
  return (
    <>
    <div className="App">
     <h1>Welcome To our Blog ( 9 euro journey) </h1>
   </div>
 
   <Form.Label htmlFor="email">Email</Form.Label>
  <Form.Control
    type="email"
    id="email"
  /><br/><br/>

  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <br/><br/>
  <Form.Text id="passwordHelpBlock" muted >
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
  <h6> Some pictures</h6>
  <Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</>
  );
}

export default App;
