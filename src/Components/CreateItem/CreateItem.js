import React from 'react';
import styled from 'styled-components';
import CreateItemForm from '../CreateItemForm';
import Item from './Item';

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

const CreateItem = ({ items, fields, createItem, deleteItem }) => (
  <Container>
    <CreateItemForm fields={fields} items={items} createItem={createItem} />
    <ItemsContainer>
      {Object.keys(items).map((key, i) => (
        <Item item={items[key]} buttonType="danger" buttonText="delete" onClick={deleteItem} />
      ))}
    </ItemsContainer>
  </Container>
);

export default CreateItem;
