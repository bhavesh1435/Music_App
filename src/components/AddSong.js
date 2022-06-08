import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const AddSong = () => {
      return (
        <div>
           <div align='centar'> 
           <h2>Adding a new Song</h2>

               </div> 

            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Song Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date Released</Form.Label>
    <Form.Control type="Date" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Artists</Form.Label>
    <Form.Control type="img" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Cancel
  </Button>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
      );



};

export default AddSong;