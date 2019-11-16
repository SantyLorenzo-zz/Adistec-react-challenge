import React from 'react';
import styled from 'styled-components';
import CreateItemForm from './CreateItemForm';
import Item from '../Item';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  background-color: white;
`;

const ItemsContainer = styled.div`
  flex: 1;
  min-width: 415px;
  padding: 50px 30px;
`;

const fields = [
  {
    label: 'Code:',
    type: 'text',
    name: 'code',
    isRequired: true,
  },
  {
    label: 'Description:',
    type: 'text',
    name: 'description',
    isRequired: true,
  },
  {
    label: 'Price:',
    type: 'numeric',
    name: 'price',
    isMoney: true,
    isRequired: true,
  },
  {
    label: 'Type:',
    type: 'radio',
    name: 'type',
    isRequired: false,
    values: ['Single', 'Multiple'],
  },
  {
    label: 'Order:',
    type: 'text',
    name: 'order',
    isRequired: true,
  },
  {
    label: 'Parent:',
    type: 'select',
    name: 'parent',
    isRequired: false,
  },
];

const listOfItems = [
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

const CreateItem = () => (
  <Container>
    <CreateItemForm fields={fields} />
    <ItemsContainer>
      {listOfItems.map((item, i) => (
        <Item item={item} buttonType="danger" buttonText="delete" />
      ))}
    </ItemsContainer>
  </Container>
);

export default CreateItem;
