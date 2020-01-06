import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return <div>{this.props.title}</div>;
  }
}
