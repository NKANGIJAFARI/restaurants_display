import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import MapScreen from './Screens/MapScreen/MapScreen';

const App = () => {
  return (
    <Router>
      <main className='App__container'>
        <div className='main__wrapper'>
          <Route path='/' component={HomeScreen} />
          <Route path='/map' component={MapScreen} />
        </div>
      </main>
    </Router>
  );
};

export default App;
