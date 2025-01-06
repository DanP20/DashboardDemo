import React from 'react';
import { Line } from 'react-chartjs-2';
import { metricsData } from '../../data/metricsData.js';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  @apply bg-white rounded-lg shadow-md p-4;
`;

const MetricsDashboard = () => {
  return (
    <MetricsContainer>
      <h2 className="font-bold text-lg">Metrics and Analytics</h2>
      <Line data={metricsData} />
    </MetricsContainer>
  );
};

export default MetricsDashboard;