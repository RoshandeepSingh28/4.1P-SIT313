import React from 'react';
import { Menu, Button } from 'semantic-ui-react'; // Importing Semantic UI components

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <img src="devdeakin-logo.png" alt="DEV@Deakin" />
    </Menu.Item>
    <Menu.Item name="home" />
    <Menu.Item name="about" />
    <Menu.Item name="features" />
    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary>Post Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;