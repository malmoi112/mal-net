import React from 'react';
import './Home.css';

import Header from './Header';

const Home = (props) => {
  return (
    <div className="Home">
      <header className="header">
        <h1>William Owens</h1>
        <h2>Software Developer</h2>
        <div class="navButton" id="aboutButton"></div>
        <div class="navButton" id="workButton"></div>
        <div class="navButton" id="contactButton"></div>
      </header>
      <div className="leftBody">
      </div>
      <div className="rightBody">
        <h1>About Me</h1>
        <div id="aboutBlurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris non pulvinar elit. Etiam imperdiet felis vitae lobortis luctus. 
          Nullam interdum lorem id elit eleifend, at sodales orci ullamcorper. 
        </div>
        <div id="aboutBlurb">
          Curabitur condimentum gravida neque. Etiam quis nisl non odio fringilla tincidunt. 
          Aliquam venenatis molestie sodales. Sed tristique accumsan lorem, ac aliquet purus vehicula vitae. 
          Vivamus id pretium est, sit amet pellentesque dolor. 
        </div>
        <div id="aboutBlurb">
          Suspendisse lorem orci, fringilla a ullamcorper vitae, lobortis vitae dui. 
          Nunc interdum condimentum vehicula. Suspendisse feugiat lectus at porttitor luctus. 
          Sed blandit sodales dictum. Nullam posuere nec turpis eu fringilla. 
          Vivamus lacinia aliquet fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <footer className="footer">
        Thanks for visiting
      </footer>
    </div>
  );
}

export default Home;