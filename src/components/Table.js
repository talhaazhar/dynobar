import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import TableRow from './TableRow';

import './style/Table.css';

function getFlexPercentage(currValue, topValue) {
  return topValue ? (currValue * 1.0) / topValue : 0;
}

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { title: 'Ferrari', key: 1, value: 3322, width: 1 },
        { title: 'Honda', key: 2, value: 3212, width: 1 },
        { title: 'BMW', key: 3, value: 2321, width: 1 },
        { title: 'Mercedes', key: 4, value: 2111, width: 1 },
        { title: 'Toyota', key: 5, value: 1532, width: 1 },
      ],
    };
  }

  componentDidMount() {
    this.startModal();
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  startModal() {
    this.intervalHandle = setInterval(() => this.updateData(), 500);
  }

  updateData() {
    const { entries } = this.state;
    const entriesCopy = JSON.parse(JSON.stringify(entries));
    const idx = Math.floor(Math.random() * entries.length);
    const add = Math.floor(Math.random() * 500);
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
    return (
      <div className="bar-table">
        <FlipMove duration={1000} style={{ width: '100%' }}>
          {this.state.entries.map(entry => (
            <TableRow
              title={entry.title}
              key={entry.key}
              value={entry.value}
              percentage={entry.width}
            />
          ))}
        </FlipMove>
      </div>
    );
  }
}
