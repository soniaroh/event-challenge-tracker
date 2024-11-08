import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabContainer = styled.div`
 display: flex;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  border-bottom: 2px solid transparent;
  
  &.active {
    color: #007bff;
    border-color: #007bff;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Tabs: React.FC = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
};

export default Tabs;
