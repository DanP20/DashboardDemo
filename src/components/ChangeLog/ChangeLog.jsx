import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { changeLogData } from '../../data/changeLogData.js';

const ChangeLogContainer = styled.div`
  @apply bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:transform hover:-translate-y-1;
`;

const ShowUpdatesButton = styled.button`
  @apply bg-accent text-white rounded-full px-4 py-2 mt-2 transition duration-200 ease-in-out hover:bg-yellow-500;
`;

const ChangeLog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChangeLogContainer>
      <h2 className="text-lg font-bold">What’s New</h2>
      <ShowUpdatesButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Updates' : 'Show Updates'}
      </ShowUpdatesButton>
      {isOpen && (
        <div className="mt-2">
          {changeLogData.map(update => (
            <div key={update.id} className="border-b py-2">
              <span className="text-midGray">{format(new Date(update.date), 'MMM d, yyyy')}</span>
              <h3 className="font-semibold text-primary">{update.title}</h3>
              <p className="text-midGray">{update.description}</p>
            </div>
          ))}
        </div>
      )}
    </ChangeLogContainer>
  );
};

export default ChangeLog; 