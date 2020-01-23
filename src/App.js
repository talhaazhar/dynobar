import React from 'react';
import './App.css';
import TopicForm from './components/TopicForm';
import Table from './components/Table';
import { dummyJSON } from './public/constants';

function App() {
  return (
    <div className="App">
      <TopicForm />
      <div className="App-container">
        <Table data={dummyJSON} />
      </div>
    </div>
  );
}

export default App;
