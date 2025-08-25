import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to 3 Brothers Landscaping</h2>
      <p>
        We provide top-notch landscaping services to enhance the beauty of your outdoor spaces. 
        Our team of experts is dedicated to delivering quality work and customer satisfaction.
      </p>
      <h3>Our Services</h3>
      <ul>
        <li>Lawn Care</li>
        <li>Garden Design</li>
        <li>Hardscaping</li>
        <li>Tree and Shrub Care</li>
        <li>Seasonal Clean-Up</li>
      </ul>
      <h3>Gallery</h3>
      <p>Check out some of our recent projects!</p>
      {/* Add images or a gallery component here */}
    </div>
  );
};

export default Home;