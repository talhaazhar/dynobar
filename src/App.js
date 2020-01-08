import React from 'react';
import './App.css';
import TopicForm from './components/TopicForm';
import Table from './components/Table';

const data = [
  {
    title: 'Ferrari',
    key: 1,
    value: 20,
    width: 1,
    logo: 'https://www.carlogos.org/logo/Ferrari-emblem-1920x1080.png',
  },
  {
    title: 'Honda',
    key: 2,
    value: 20,
    width: 1,
    logo:
      'https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/514/2017/08/28205128/cropped-honda-icon.png',
  },
  {
    title: 'BMW',
    key: 3,
    value: 20,
    width: 1,
    logo: 'http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19713.png',
  },
  {
    title: 'Mercedes',
    key: 4,
    value: 20,
    width: 1,
    logo: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80145.png',
  },
  {
    title: 'Toyota',
    key: 5,
    value: 20,
    width: 1,
    logo:
      'https://www.pngkey.com/png/full/377-3770122_toyota-logo-png-transparent-background-toyota-logo.png',
  },
  {
    title: 'Ferrari',
    key: 6,
    value: 20,
    width: 1,
    logo: 'https://www.carlogos.org/logo/Ferrari-emblem-1920x1080.png',
  },
  {
    title: 'Honda',
    key: 7,
    value: 20,
    width: 1,
    logo:
      'https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/514/2017/08/28205128/cropped-honda-icon.png',
  },
  {
    title: 'BMW',
    key: 8,
    value: 20,
    width: 1,
    logo: 'http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19713.png',
  },
  {
    title: 'Mercedes',
    key: 9,
    value: 20,
    width: 1,
    logo: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80145.png',
  },
  {
    title: 'Toyota',
    key: 10,
    value: 20,
    width: 1,
    logo:
      'https://www.pngkey.com/png/full/377-3770122_toyota-logo-png-transparent-background-toyota-logo.png',
  },
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <TopicForm />
        <Table id="top-container" data={data} />
      </div>
    </div>
  );
}

export default App;
