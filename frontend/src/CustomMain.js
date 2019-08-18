import React from 'react';
import './App.css';
import { Table,Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select';

const Employes = [
  {
    first:"Anand",
    last:"salimath",

  },
  {
    first:"virat",
    last:"salimath",
  },
  {
    first:"viratayya",
    last:"salimath",
  },

];

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];


function CustomMain() {
  const listItems = Employes.map((Employee) =>
      <tr>
        <td>{Employee['first']}</td>
        <td>{Employee['last']}</td>
        <td>
          <Button variant="info" onClick={() => setShow(true)}>Edit</Button>
        </td>
      </tr>
  );

  const [show, setShow] = useState(false);

  return (
    <div className="jumbotron m-2 p-3 bg-white rounded shadow-sm">
      <h4 className="border-bottom border-gray pb-2 mb-1 font-weight-bold">Employee List</h4>
      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </Table>


    <Modal
        show={show}
        onHide={() => setShow(false)}
        // dialogClassName="modal-100w"
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Edit View
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>


          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Band</Form.Label>
            <Select
            closeMenuOnSelect={false}
            options={colourOptions}
            isMulti/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
        </Modal.Body>
      </Modal>

   
    </div>
  );
}

export default CustomMain;
