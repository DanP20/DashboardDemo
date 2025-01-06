import React from 'react';
import styled from 'styled-components';
import metricsImage from '../../assets/metrics.png';

const MetricsContainer = styled.div`
  @apply bg-white rounded-lg shadow-md p-4;
`;

const MetricsDashboard = () => {
  return (
    <MetricsContainer>
      <h2 className="font-bold text-lg">Metrics and Analytics</h2>
      <img src={metricsImage} alt="Metrics Visualization" />
    </MetricsContainer>
  );
};

export default MetricsDashboard;