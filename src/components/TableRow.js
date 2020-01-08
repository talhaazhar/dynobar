import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/TableRow.css';

export default class TableRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    percentage: PropTypes.number,
    color: PropTypes.string,
    logo: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      animate: true,
    };
  }

  render() {
    const { percentage, title, value, color, logo } = this.props;

    return (
      <div>
        <div className="bar">
          <div style={{ flex: percentage, backgroundColor: color }}>
            <div className="bar-title">
              <img src={logo} alt="Avatar" className="image-icon" />
              {title}
            </div>
            <div className="bar-value">{value}</div>
          </div>
        </div>
      </div>
    );
  }
}
