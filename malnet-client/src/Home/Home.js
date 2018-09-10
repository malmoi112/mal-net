import React from 'react';
import './Home.css';

import Header from './Header';

const Home = (props) => {
  return (
    <div className="Home">
      <Header />
      <span>Body</span>
    </div>
  );
}

export default Home;