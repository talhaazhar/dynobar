import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import TableRow from './TableRow';

import './style/Table.css';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { title: 'Ferrari', key: 1, index: 1 },
        { title: 'Honda', key: 2, index: 2 },
        { title: 'BMW', key: 3, index: 3 },
        { title: 'Mercedes', key: 4, index: 4 },
        { title: 'Toyota', key: 5, index: 5 },
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
    this.intervalHandle = setInterval(() => this.updateData(), 1000);
  }

  updateData() {
    const { entries } = this.state;
    let entriesCopy = JSON.parse(JSON.stringify(entries));
    const idx = Math.floor(Math.random() * entries.length);
    const add = Math.floor(Math.random() * 100);
    entriesCopy[idx].index += add;
    console.log(entriesCopy);
    entriesCopy.sort((a, b) => (a.index > b.index ? 1 : -1));
    this.setState({
      entries: entriesCopy,
    });
  }

  render() {
    return (
      <div>
        <FlipMove>
          {this.state.entries.map(entry => (
            <TableRow
              title={entry.title + ': ' + entry.index}
              key={entry.key}
              index={entry.index}
            />
          ))}
        </FlipMove>
      </div>
    );
  }
}
