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
  align-items: center;
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

const RealeasedBundledItem = ({ item, onClick }) => (
  <ItemContaier>
    <TitleContainer>
      <Title>CODE{item.code}</Title>
      <div>
        <Button type="link">Print</Button>
        <Button onClick={() => onClick(item)} type="danger">
          Delete
        </Button>
      </div>
    </TitleContainer>
    <DescriptionContainer>
      <Description>{item.description}</Description>
      <Description>${item.price}</Description>
      <Description>{item.type}</Description>
      {item.children &&
        item.children.map((children, e) => (
          <>
            <SubItems>Sub-items</SubItems>
            <ItemContaier>
              <ChildrenTitleContainer>
                <Title>
                  CODE{item.code}-{children.code}
                </Title>
              </ChildrenTitleContainer>
              <DescriptionContainer>
                <Description>{children.description}</Description>
                <Description>${children.price}</Description>
                <Description>{children.type}</Description>
              </DescriptionContainer>
            </ItemContaier>
          </>
        ))}
    </DescriptionContainer>
  </ItemContaier>
);

export default RealeasedBundledItem;
