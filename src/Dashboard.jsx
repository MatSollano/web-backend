import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './dashboard.css'; // Import the dashboard.css file

const Dashboard = ({ userEmail }) => {
  const handleLogout = () => {
    // Your logout logic here
  };

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (chartRef.current && location.pathname === '/dashboard/summary') {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40,  87, 38, 79, 47, 93],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [location.pathname]);

  return (
    <div className="dashboard-container">
      <Sidebar handleLogout={handleLogout} />
      <div className="main-content">
        {location.pathname === '/dashboard/summary' && (
          <div className="chart-container">
            <h2>Sales Summary</h2>
            <canvas ref={chartRef}></canvas>
          </div>
        )}
        <div className="page-content">
          {location.pathname === '/dashboard/category' && (
            <>
              <h2>Sales by Category</h2>
              <p>Here you can see the sales breakdown by different categories such as:</p>
              <ul>
                <li>T-shirts</li>
                <li>Pants</li>
                <li>Dresses</li>
                <li>Outerwear</li>
                <li>Accessories</li>
              </ul>
            </>
          )}
          {location.pathname === '/dashboard/employee' && (
            <>
              <h2>Sales by Employee</h2>
              <p>Here you can see the sales performance of each employee:</p>
              <ul>
                <li>April Rosales - Total Sales: ₱500</li>
                <li>Mathew - Total Sales: ₱600</li>
                <li>Blandin - Total Sales: ₱700</li>
              </ul>
            </>
          )}
          {location.pathname === '/dashboard/receipts' && (
            <>
              <h2>Receipts</h2>
              <p>Here are the recent receipts:</p>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-03-25</td>
                    <td>April Rosales</td>
                    <td>₱500</td>
                  </tr>
                  <tr>
                    <td>2024-03-24</td>
                    <td>Mathew</td>
                    <td>₱600</td>
                  </tr>
                  <tr>
                    <td>2024-03-23</td>
                    <td>Blandin</td>
                    <td>₱700</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {/* Modify the content for "Sales by Payment Status" */}
          {location.pathname === '/dashboard/payment-status' && (
            <>
              <h2>Sales by Payment Status</h2>
              <p>Here you can see the sales breakdown by payment status:</p>
              <ul>
                <li>Paid</li>
                <li>Unpaid</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
