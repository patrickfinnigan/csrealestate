import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

export class Description extends Component {
    render() {
        return (
            <div className="description">
                <Card>
                    <Card.Body>
                        We offer cash and quick closing for your home. We understand life can get in the way sometimes, and we're here to make it a little easier for you.
                    </Card.Body>
                </Card>
            </div>
        );  
    }
}

