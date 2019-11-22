import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import RealeasedBundledItem from "../RealeasedBundledItem";

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

const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RealeasedBundles = ({ realeasedBundles, deleteRealeasedBundled }) => (
  <Container>
    {Object.keys(realeasedBundles).map((item, i) => {
      return (
        <>
          <HeaderItem>
            <SectionTitle>{item}</SectionTitle>
            <div>
              <Button type="link">Print</Button>
              <Button
                onClick={() => deleteRealeasedBundled(item)}
                type="danger"
              >
                Delete
              </Button>
            </div>
          </HeaderItem>
          <RealeasedBundledItem
            item={realeasedBundles[item]}
            buttonType="danger"
            buttonText="delete"
          />
          {realeasedBundles[i + 1] && <SeparatorLine />}
        </>
      );
    })}
  </Container>
);

export default RealeasedBundles;
