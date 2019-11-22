import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import BundledItem from './BundledItemContainer';

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const ItemsContainer = styled.div`
  padding: 20px 20px 0 10px;
`;

const SectionTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0;
  margin: 20px 0 0 30px;
`;

const Price = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin: 0 10px 10px 10px;
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
  margin: 0 10px;
`;

const CurrentlyBundled = ({
  listOfCurrentlyBundledItems,
  deleteCurrentlyBundledItem,
  createRealeasedBundled,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMultipleItems = value => {
    setTotalPrice(totalPrice + value);
  };

  const getPrice = listOfItems => {
    const subItems = [];
    const items = Object.keys(listOfItems).map(key => {
      if (listOfItems[key].children) {
        Object.keys(listOfItems[key].children).map(item => {
          const children = [listOfItems[key].children[item]];
          Array.prototype.push.apply(subItems, children);
        });
      }
      return listOfItems[key];
    });
    Array.prototype.push.apply(items, subItems);
    const total = items.reduce((acc, item) => acc + parseInt(item.price * item.quantity, 10), 0);
    setTotalPrice(total);
  };

  useEffect(() => getPrice(listOfCurrentlyBundledItems));

  return (
    <Container>
      <SectionTitle>Currently Bundled</SectionTitle>
      <ItemsContainer>
        {Object.keys(listOfCurrentlyBundledItems).map((key, i) => (
          <BundledItem
            onClick={deleteCurrentlyBundledItem}
            item={listOfCurrentlyBundledItems[key]}
            handleMultipleItems={handleMultipleItems}
            index={i}
          />
        ))}
      </ItemsContainer>
      <Price> ${totalPrice}</Price>
      <SubmitButton
        type="primary"
        onClick={() => createRealeasedBundled(listOfCurrentlyBundledItems)}
      >
        Accept Bundle
      </SubmitButton>
    </Container>
  );
};

export default CurrentlyBundled;
