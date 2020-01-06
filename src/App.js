import React from 'react';
import './App.css';
import TopicForm from './components/TopicForm';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopicForm />
        <Table id="top-container" />
      </header>
    </div>
  );
}

export default App;
