import React from 'react';
import './App.css';
import { Button,Container,Row,Col } from 'react-bootstrap';

import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';


function CustomMain() {
 

  return (
    <div className="jumbotron m-2 p-3 bg-white rounded shadow-sm">
      <h4 className="border-bottom border-gray pb-2 mb-1 font-weight-bold">Employee Details</h4>
      <Container className="jumbotron">
        <Row>
            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>First Name</InputGroup.Text>
                    </InputGroup.Prepend> 
                    <FormControl value="Viratayya" disabled />
                    
                </InputGroup>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Last Name</InputGroup.Text>
                    </InputGroup.Prepend> 
                    <FormControl value="Salimath" />
                    
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Email Address</InputGroup.Text>
                    </InputGroup.Prepend> 
                    <FormControl value="viratayya.salimath@gmail.com" />
                    
                </InputGroup>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Band</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value="orange"
                    />
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value="red"

                    />
                </InputGroup>

            </Col>
        </Row>
        <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
      </Container>
      

          
          
          


          

          
   
    </div>
  );
}

export default CustomMain;
