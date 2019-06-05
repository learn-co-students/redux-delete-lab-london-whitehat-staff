import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    console.log('band.id', this.props.band.id);
    this.props.delete(this.props.band.id);
};

  render() {
    return(
      <div>
        <ul>
          <li>
            <span>{this.props.band.name}</span>
            <button onClick={this.handleClick}>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
};

export default Band;
