import React, { useState } from 'react';

const DebugPanel = () => {
  const [filter, setFilter] = useState('');
  const [openErrorId, setOpenErrorId] = useState(null);

  // Sample historical error logs
  const errorLogs = [
    { id: 1, message: 'Failed to connect to payment gateway', type: 'API', details: 'Error 500: Internal Server Error' },
    { id: 2, message: 'Rate limit approaching', type: 'API', details: 'Limit will be reached in 5 requests' },
    { id: 3, message: 'User session started', type: 'General', details: 'Session ID: 12345' },
    { id: 4, message: 'Cache miss for product data', type: 'API', details: 'Product ID: 67890' },
  ];

  // Filter logs based on user input
  const filteredLogs = errorLogs.filter(log => 
    log.message.toLowerCase().includes(filter.toLowerCase())
  );

  const toggleError = (id) => {
    setOpenErrorId(openErrorId === id ? null : id);
  };

  return (
    <div className="component">
      <h2>Debugging</h2>
      <h4>Historical Error Logs</h4>
      <input 
        type="text" 
        placeholder="Filter logs..." 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <div className="error-log-container">
        {filteredLogs.map(log => (
          <div key={log.id}>
            <div onClick={() => toggleError(log.id)} style={{ cursor: 'pointer', margin: '10px 0', background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
              <strong>{log.message} ({log.type})</strong>
            </div>
            {openErrorId === log.id && (
              <div style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                <p>{log.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>Links to Documentation</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <a href="/docs/api-errors" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            API Error Documentation
          </button>
        </a>
        <a href="/docs/debugging-tools" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Debugging Tools Guide
          </button>
        </a>
      </div>
    </div>
  );
};

export default DebugPanel;