import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaBug, FaComments, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <ul>
        <li>
          <Link to="/" className="sidebar-link" title="Home">
            <FaHome className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/changelog" className="sidebar-link" title="Change Log">
            <FaClipboardList className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/debug" className="sidebar-link" title="Debug Panel">
            <FaBug className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="sidebar-link" title="Feedback Form">
            <FaComments className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/metrics" className="sidebar-link" title="Metrics Dashboard">
            <FaChartLine className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/billing" className="sidebar-link" title="Billing Section">
            <FaDollarSign className="sidebar-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 