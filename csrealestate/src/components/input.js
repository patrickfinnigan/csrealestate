import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Input extends Component {
    render() {
        return (
            <div className="input">
                <Form>
                    <Form.Group controlId="inputForm">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control type="text" placeholder="Name" />
                        <Form.Control as="textarea" rows="3" placeholder="Let us know what you're looking for!"/>
                    </Form.Group>
                    <Button variant="success">Submit!</Button>
                </Form>
            </div>
        );  
    }
}

