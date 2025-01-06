import React from 'react';
import ChangeLog from './ChangeLog/ChangeLog';
import DebugPanel from './DebugPanel/DebugPanel';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import MetricsDashboard from './MetricsDashboard/MetricsDashboard';
import BillingSection from './BillingSection/BillingSection';
import NewsFeed from './NewsFeed/NewsFeed';

const Home = () => {
  return (
    <div className="component-container">
    
      <div className="component full-width">
        <ChangeLog />
      </div>
      <div className="component full-width">
        <NewsFeed />
      </div>
      <div className="component">
        <DebugPanel />
      </div>
      
      <div className="component">
        <MetricsDashboard />
      </div>
      <div className="component">
        <FeedbackForm />
        </div>
      <div className="component">
        <BillingSection />
      </div>
      
    </div>
  );
};

export default Home;
