import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ChangeLog from './components/ChangeLog/ChangeLog';
import DebugPanel from './components/DebugPanel/DebugPanel';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import MetricsDashboard from './components/MetricsDashboard/MetricsDashboard';
import ErrorBoundary from './ErrorBoundary';
import BillingSection from './components/BillingSection/BillingSection';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/changelog" element={<ChangeLog />} />
            <Route path="/debug" element={<DebugPanel />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/metrics" element={<MetricsDashboard />} />
            <Route path="/billing" element={<BillingSection />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;