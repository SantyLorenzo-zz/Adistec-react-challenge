import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ItemContaier = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
  border-radius: 2px;
  border: 1px solid #efefef;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 12px 15px 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ChildrenTitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 12px 15px 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fcfcfc;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
`;

const SubItems = styled.p`
  margin-top: 15px;
  margin-bottom: 2px;
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  padding: 25px;
  border-top: 1px solid #efefef;
`;

const Description = styled.div`
  margin: 5px 0;
  color: #7c7c7c;
  font-size: 14px;
`;

const Item = ({ item, onClick, buttonType, buttonText }) => {
  const isEmpty = obj => Object.entries(obj).length === 0;

  return (
    <ItemContaier>
      <TitleContainer>
        <Title>CODE{item.code}</Title>
        <Button onClick={() => onClick(item)} type={buttonType}>
          {buttonText}
        </Button>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{item.description}</Description>
        <Description>${item.price}</Description>
        <Description>{item.type}</Description>
        {!isEmpty(item.children) && <SubItems>Sub-items</SubItems>}
        {console.log('pepe', isEmpty(item.children))}

        {item.children &&
          Object.keys(item.children).map((key, e) => (
            <>
              <ItemContaier>
                <ChildrenTitleContainer>
                  <Title>
                    CODE{item.code}-{item.children[key].code}
                  </Title>
                  <Button onClick={() => onClick(item)} type={buttonType}>
                    {buttonText}
                  </Button>
                </ChildrenTitleContainer>
                <DescriptionContainer>
                  <Description>{item.children[key].description}</Description>
                  <Description>${item.children[key].price}</Description>
                  <Description>{item.children[key].type}</Description>
                </DescriptionContainer>
              </ItemContaier>
            </>
          ))}
      </DescriptionContainer>
    </ItemContaier>
  );
};
export default Item;
