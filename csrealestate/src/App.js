//Initial imports
import React from 'react';
//User-made Components
import { Input } from './components/input.js';
import { Description } from './components/description.js';
import { Header } from './components/header.js';
//Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <Input />
          </Col>
          <Col>
            <Description />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
