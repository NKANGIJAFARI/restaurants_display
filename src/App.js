import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import MapScreen from './Screens/MapScreen/MapScreen';

const App = () => {
  return (
    <Router>
      <main className='App__container'>
        <Header />
        <div className='main__wrapper'>
          <Route path='/map' component={MapScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </div>
      </main>
    </Router>
  );
};

export default App;
