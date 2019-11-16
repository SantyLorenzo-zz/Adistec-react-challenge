import React from 'react';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header';

// Components
import CreateBundle from '../CreateBundle';
import CreateItem from '../CreateItem';
import RealeasedBundles from '../RealeasedBundles';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 45px 45px 0 45px;
  display: flex;
  background-color: #f0f2f5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.p`
  color: #545456;
  margin: 25px 0;
`;

const App = props => {
  const {
    location: { pathname },
  } = props;

  return (
    <Wrapper>
      <Header pathname={pathname} />
      <Content>
        <Route path="/" exact component={CreateItem} />
        <Route path="/createBundle" component={CreateBundle} />
        <Route path="/realeasedBundles" component={RealeasedBundles} />
        <Footer>Adistec 2019, para Santi</Footer>
      </Content>
    </Wrapper>
  );
};

export default withRouter(App);
