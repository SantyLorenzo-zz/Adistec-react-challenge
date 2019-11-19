import React from 'react';
import styled from 'styled-components';
import AvailableItems from '../AvailableItems';
import CurrentlyBundled from '../CurrentlyBundled';

const Container = styled.div`
  width: 100%;
  min-height: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
`;

const CreateBundle = ({
  items,
  currentlyBlunded,
  createCurrentlyBundledItem,
  deleteCurrentlyBundledItem,
  createRealeasedBundled,
}) => (
  <Container>
    <AvailableItems
      listOfAvailableItems={items}
      createCurrentlyBundledItem={createCurrentlyBundledItem}
    />
    <CurrentlyBundled
      listOfCurrentlyBundledItems={currentlyBlunded}
      deleteCurrentlyBundledItem={deleteCurrentlyBundledItem}
      createRealeasedBundled={createRealeasedBundled}
    />
  </Container>
);

export default CreateBundle;
