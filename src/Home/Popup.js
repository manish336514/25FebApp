
import React, { Component } from 'react';
import '../App.css';

export default class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text.lastdate}</h1>
          <button 
          onClick={this.props.hideModal}
          >close me</button>
          </div>
        </div>
      );
    }
  }
  