import React from 'react';
import styled from 'styled-components';
import AvailableItems from './AvailableItems';
import CurrentlyBundled from './CurrentlyBundled';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
`;

const listOfAvailableItems = [
  {
    title: '003',
    description: 'This is the description',
    price: '100.99',
    type: 'Single',
    children: null,
  },
  {
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
];

const listOfCurrentlyBundledItems = [
  {
    title: '004',
    description: 'This is another description',
    price: '10',
    type: 'Multiple',
    children: [
      {
        title: '003',
        description: 'This is the description',
        price: '10',
        type: 'Multiple',
        children: null,
      },
    ],
  },
];

const CreateBundle = () => (
  <Container>
    <AvailableItems listOfAvailableItems={listOfAvailableItems} />
    <CurrentlyBundled listOfCurrentlyBundledItems={listOfCurrentlyBundledItems} />
  </Container>
);

export default CreateBundle;
