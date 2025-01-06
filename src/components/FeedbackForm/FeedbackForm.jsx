import React from 'react';
import styled from 'styled-components';
import { systemStatus } from '../../data/systemStatus.js';

const FeedbackContainer = styled.div`
  @apply bg-white rounded-lg shadow-md p-4;
`;

const FeedbackForm = () => {
  return (
    <FeedbackContainer>
      <h2 className="font-bold text-lg">Support & Feedback</h2>
      <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
        {systemStatus.status} (Last checked: {new Date(systemStatus.lastChecked).toLocaleString()})
      </div>
      <form>
        <input type="text" placeholder="Name" className="border rounded p-2 mb-2 w-full" />
        <input type="email" placeholder="Email" className="border rounded p-2 mb-2 w-full" />
        <textarea placeholder="Feedback" className="border rounded p-2 mb-2 w-full" />
        <button type="submit" className="bg-ubio-accent text-white rounded px-4 py-2">
          Submit Feedback
        </button>
      </form>
    </FeedbackContainer>
  );
};

export default FeedbackForm;