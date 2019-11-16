import React from 'react';
import styled from 'styled-components';
import RealeasedBundledItem from './RealeasedBundledItem';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: 100%;
  background-color: white;
`;

const SectionTitle = styled.p`
  font-size: 22px;
  color: black;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SeparatorLine = styled.hr`
  border: none;
  border-top: 1px dashed #efefef;
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;

const listOfRealeasedBundles = [
  {
    name: 'Bundle Name XX',
    title: '003',
    description: 'This is the description',
    price: '100.99',
    type: 'Single',
    children: null,
  },
  {
    name: 'Bundle Name XX',
    title: '004',
    description: 'This is another description',
    price: '55.34',
    type: 'Multiple',
    children: [
      {
        title: '003',
        description: 'This is the description',
        price: '100.99',
        type: 'Single',
        children: null,
      },
    ],
  },
  {
    name: 'Bundle Name XX',
    title: '003',
    description: 'This is the description',
    price: '100.99',
    type: 'Single',
    children: null,
  },
];

const RealeasedBundles = () => (
  <Container>
    {listOfRealeasedBundles.map((item, i) => (
      <>
        <SectionTitle>{item.name}</SectionTitle>
        <RealeasedBundledItem item={item} buttonType="danger" buttonText="delete" />
        {listOfRealeasedBundles[i + 1] && <SeparatorLine />}
      </>
    ))}
  </Container>
);

export default RealeasedBundles;
