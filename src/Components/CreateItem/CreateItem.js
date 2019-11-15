import React from 'react';
import styled from 'styled-components';
import CreateItemForm from '../CreateItemForm';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
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

const CreateItem = () => (
  <Container>
    <CreateItemForm fields={fields} />
  </Container>
);

export default CreateItem;
