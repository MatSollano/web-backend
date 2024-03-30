import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faReceipt, faMoneyBill, faSignOutAlt, faChevronDown, faChevronUp, faTags } from '@fortawesome/free-solid-svg-icons'; 

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff; 
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffd700;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
`;

const LogoutButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const Sidebar = ({ handleLogout }) => {
  const [showReports, setShowReports] = useState(true);
  const [showEmployees, setShowEmployees] = useState(true);

  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function passed as props
  };

  const toggleReports = () => {
    setShowReports(!showReports);
  };

  const toggleEmployees = () => {
    setShowEmployees(!showEmployees);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        Super Admin Dashboard
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem onClick={toggleReports}>
          <FontAwesomeIcon icon={showReports ? faChevronUp : faChevronDown} />
          <span style={{ fontSize: '16px', marginLeft: '10px' }}>Reports</span>
        </SidebarMenuItem>
        {showReports && (
          <>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faChartBar} />
              <SidebarLink to="/dashboard/summary">Sales Summary</SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faTags} />
              <SidebarLink to="/dashboard/category">Sales by Category</SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faUsers} /> 
              <SidebarLink to="/dashboard/employee">Sales by Employee</SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faMoneyBill} /> 
              <SidebarLink to="/dashboard/payment-status">Sales by Payment Status</SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faReceipt} />
              <SidebarLink to="/dashboard/receipts">Receipts</SidebarLink>
            </SidebarMenuItem>
          </>
        )}
        <SidebarMenuItem onClick={toggleEmployees}>
          <FontAwesomeIcon icon={showEmployees ? faChevronUp : faChevronDown} />
          <span style={{ fontSize: '16px', marginLeft: '10px' }}>Employees</span>
        </SidebarMenuItem>
        {showEmployees && (
          <>
            <SidebarMenuItem>
              <FontAwesomeIcon icon={faUsers} />
              <SidebarLink to="/dashboard/employees">Employee List</SidebarLink>
            </SidebarMenuItem>
            {/* Add more employee-related items here if needed */}
          </>
        )}
      </SidebarMenu>
      <SidebarFooter>
        {/* Use the Link component to navigate to the login page */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoutButton onClick={handleLogoutClick}>Logout <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: '5px' }} /></LogoutButton>
        </Link>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
