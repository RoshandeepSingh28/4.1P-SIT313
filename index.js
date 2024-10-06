import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Navbar';
import FeaturedArticlesAndTutorials from './ArticleTutorial';
import Form from './SignUp';
import Footer from './PageFooter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <FeaturedArticlesAndTutorials />
    <Form />
    <Footer />
  </div>
);