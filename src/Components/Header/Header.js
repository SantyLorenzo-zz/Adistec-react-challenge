import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader = styled.div`
  display: flex;
  padding-left: 3%;
  flex-direction: row;
  background-color: #001529;
`;

const Button = styled.a`
  display: flex;
  color: #8b949d;
  cursor: pointer;
  padding: 21px 20px;
  color: ${props => (props.selected ? 'white' : '#8b949d')};
  background-color: ${props => (props.selected ? '#1890ff' : '#001529')};
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = ({ pathname }) => {
  return (
    <AppHeader>
      <LinkTo to="/">
        <Button selected={pathname === '/' && true}>Create Items</Button>
      </LinkTo>
      <LinkTo to="/createBundle">
        <Button selected={pathname === '/createBundle' && true}>Create Bundle</Button>
      </LinkTo>
      <LinkTo to="/realeasedBundles">
        <Button selected={pathname === '/realeasedBundles' && true}>Realeased Bundles</Button>
      </LinkTo>
    </AppHeader>
  );
};

export default Header;
