import React from 'react';
import Navbar from './Navbar';
import FeaturedArticles from './Featuredarticles';
import FeaturedTutorials from './featuredTutorials';
import SignupForm from './SignUpform';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src="your-image-path.png" alt="Wireframe Background" className="header-image" />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;