import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Banner2 from '../Components/Banner/Banner2';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default Home;
 
