import React, { Component } from 'react';
// import { Card } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="headerTitle">CS Real Estate Solutions</h1>
                <img className="headerImage" src='../../images/title_logo.png' alt='header'></img>
            </div>
        );  
    }
}

