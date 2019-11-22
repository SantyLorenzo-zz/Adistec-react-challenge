import React from "react";
import styled from "styled-components";
import { Button, InputNumber } from "antd";
import numeral from "numeral";

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

const MultipleInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemTotal = styled.p`
  margin: 5px 0;
  color: #7c7c7c;
  font-size: 14px;
  margin-left: 10px;
`;

const BundledItem = ({ item, updateQuantity, onClick }) => {
  const itemPrice = parseInt(item.price * item.quantity, 10);

  return (
    <ItemContaier>
      <TitleContainer>
        <Title>CODE{item.code}</Title>
        <Button onClick={() => onClick(item)} type="danger">
          Delete
        </Button>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{item.description}</Description>
        <Description>{numeral(item.price).format("$0,0.00")}</Description>
        <Description>{item.type}</Description>
        {item.type === "Multiple" && (
          <MultipleInput>
            <InputNumber
              min={1}
              max={100}
              defaultValue={1}
              onChange={value => updateQuantity(null, item.code, value)}
            />
            <ItemTotal>{numeral(itemPrice).format("$0,0.00")}</ItemTotal>
          </MultipleInput>
        )}
        {item.children &&
          Object.keys(item.children).map(key => {
            const subItem = item.children[key];
            const subItemPrice = parseInt(subItem.price * subItem.quantity, 10);
            return (
              <>
                <SubItems>Sub-items</SubItems>
                <ItemContaier>
                  <ChildrenTitleContainer>
                    <Title>
                      CODE{item.code}-{subItem.code}
                    </Title>
                  </ChildrenTitleContainer>
                  <DescriptionContainer>
                    <Description>{subItem.description}</Description>
                    <Description>
                      {numeral(subItem.price).format("$0,0.00")}
                    </Description>

                    <Description>{subItem.type}</Description>
                    {subItem.type === "Multiple" && (
                      <MultipleInput>
                        <InputNumber
                          min={1}
                          max={100}
                          defaultValue={1}
                          onChange={value =>
                            updateQuantity(item.code, subItem.code, value)
                          }
                        />
                        <ItemTotal>
                          {numeral(subItemPrice).format("$0,0.00")}
                        </ItemTotal>
                      </MultipleInput>
                    )}
                  </DescriptionContainer>
                </ItemContaier>
              </>
            );
          })}
      </DescriptionContainer>
    </ItemContaier>
  );
};

export default BundledItem;
