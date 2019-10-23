import React, { Component } from 'react';
import { render } from 'react-dom';
import propTypes from 'prop-types';

export default class Cards extends Component
{
  render()
  {    
    return (
    <div>
    <h2> {this.props.name} </h2>
    <h3>{this.props.email} </h3>
    <h4> {this.props.age} </h4>
    </div>
    );
  
  }
}


