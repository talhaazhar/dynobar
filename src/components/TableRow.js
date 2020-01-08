import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/TableRow.css';

export default class TableRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    percentage: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      animate: true,
    };
  }

  render() {
    const { percentage, title, value } = this.props;

    return (
      <div>
        {`${title}:  ${value}`}

        <div className="box">
          <div style={{ flex: percentage }}></div>
          <div></div>
        </div>
      </div>
    );
  }
}
