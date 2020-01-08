import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

import './style/Table.css';

const colorList = [
  '#e6194B',
  '#3cb44b',
  '#ffe119',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42d4f4',
  '#f032e6',
  '#bfef45',
  '#fabebe',
];

function getFlexPercentage(currValue, topValue) {
  return topValue ? (currValue * 1.0) / topValue : 0;
}

export default class Table extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.props.data.forEach(function(entry, idx) {
      entry.color = colorList[idx % colorList.length];
    });

    this.state = {
      entries: this.props.data,
    };
  }

  componentDidMount() {
    this.startModal();
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  startModal() {
    this.intervalHandle = setInterval(() => this.updateData(), 50);
  }

  updateData() {
    const { entries } = this.state;
    const entriesCopy = JSON.parse(JSON.stringify(entries));
    const idx = Math.floor(Math.random() * entries.length);
    const add = Math.floor(Math.random() * 50);
    entriesCopy[idx].value += add;
    entriesCopy.sort((a, b) => (a.value < b.value ? 1 : -1));

    const topValue = entriesCopy[0].value;
    entriesCopy.forEach(function(entry) {
      entry.width = getFlexPercentage(entry.value, topValue);
    });
    this.setState({
      entries: entriesCopy,
    });
  }

  render() {
    let { entries } = this.state;
    const numBars = Math.min(entries.length, 6);
    entries = entries.slice(0, numBars);

    return (
      <div className="bar-table">
        <FlipMove
          duration={800}
          enterAnimation="fade"
          leaveAnimation="fade"
          style={{ width: '100%' }}>
          {entries.map(entry => (
            <TableRow
              title={entry.title}
              key={entry.key}
              value={entry.value}
              percentage={entry.width}
              color={entry.color}
              logo={entry.logo}
            />
          ))}
        </FlipMove>
      </div>
    );
  }
}
