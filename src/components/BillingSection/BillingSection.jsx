import React from 'react';
import { FaDollarSign, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons
import './BillingSection.css'; // Ensure CSS is imported

const BillingSection = () => {
  // Sample data for bills over the past 5 months with more details
  const bills = [
    { id: 1, month: 'January', amount: '$200', status: 'paid', dueDate: '2023-01-15', description: 'Monthly subscription', paymentMethod: 'Credit Card' },
    { id: 2, month: 'February', amount: '$150', status: 'unpaid', dueDate: '2023-02-15', description: 'Service fee', paymentMethod: 'PayPal' },
    { id: 3, month: 'March', amount: '$300', status: 'paid', dueDate: '2023-03-15', description: 'Annual renewal', paymentMethod: 'Bank Transfer' },
    { id: 4, month: 'April', amount: '$250', status: 'paid', dueDate: '2023-04-15', description: 'Consultation fee', paymentMethod: 'Credit Card' },
    { id: 5, month: 'May', amount: '$100', status: 'unpaid', dueDate: '2023-05-15', description: 'Late fee', paymentMethod: 'Credit Card' },
  ];

  return (
    <div className="billing-section">
      <h3>Billing History</h3>
      <div className="billing-grid">
        {bills.map(bill => (
          <div key={bill.id} className="billing-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', margin: '10px' }}>
            {bill.status === 'paid' ? (
              <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
            ) : (
              <FaTimesCircle style={{ color: 'red', marginRight: '10px' }} />
            )}
            <div style={{ flex: 1 }}>
              <span>{bill.month}: {bill.amount}</span><br />
              <span>Due Date: {bill.dueDate}</span><br />
              <span>Description: {bill.description}</span><br />
              <span>Payment Method: {bill.paymentMethod}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingSection;