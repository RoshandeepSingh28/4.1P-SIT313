import React from 'react';
import { Button } from 'semantic-ui-react'; // Importing Button from Semantic UI

const tutorials = [
  { name: 'Tutorial 1', description: 'Description of Tutorial 1' },
  { name: 'Tutorial 2', description: 'Description of Tutorial 2' },
  { name: 'Tutorial 3', description: 'Description of Tutorial 3' },
];

const FeaturedTutorials = () => (
  <div>
    <h2>Featured Tutorials</h2>
    <div className="tutorial-cards">
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-card">
          
          <h3>{tutorial.name}</h3>
          <p>{tutorial.description}</p>
        </div>
      ))}
    </div>
    <Button color="grey">See All Tutorials</Button>
  </div>
);

export default FeaturedTutorials;