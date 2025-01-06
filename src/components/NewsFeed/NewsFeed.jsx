import React from 'react';
import './NewsFeed.css'; // Ensure your styles are still applied
import lookerImage from '../../assets/looker.png'; // Adjust the path as necessary

const NewsFeed = () => {
  return (
    <div className="news-feed">
     
      
      {/* Display the image from the assets folder */}
      <img
        src={lookerImage} // Use the imported image
        alt="Looker Studio Report" // Provide an alt text for accessibility
        width="100%" // Make the image responsive
        style={{ borderRadius: '12px' }} // Optional: Add some styling
      />
    </div>
  );
};

export default NewsFeed;
