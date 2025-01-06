export const debugLogs = [
    {
      id: 1,
      timestamp: '2024-03-04T10:30:00',
      level: 'error',
      message: 'Failed to connect to payment gateway',
      source: 'PaymentService',
      details: 'Connection timeout after 30s'
    },
    {
      id: 2,
      timestamp: '2024-03-04T10:29:00',
      level: 'warning',
      message: 'Rate limit approaching',
      source: 'APIService',
      details: '90% of rate limit reached'
    },
    {
      id: 3,
      timestamp: '2024-03-04T10:28:00',
      level: 'info',
      message: 'User session started',
      source: 'AuthService',
      details: 'User ID: 12345'
    },
    {
      id: 4,
      timestamp: '2024-03-04T10:27:00',
      level: 'debug',
      message: 'Cache miss for product data',
      source: 'CacheService',
      details: 'Fetching from database'
    }
  ];