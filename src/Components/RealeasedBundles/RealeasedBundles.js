import React from "react";
import styled from "styled-components";
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

const RealeasedBundles = ({ realeasedBundles, deleteRealeasedBundled }) => {
  console.log("realeasedBundles", realeasedBundles);
  return (
    <Container>
      {Object.keys(realeasedBundles).map((item, i) => {
        return (
          <>
            <SectionTitle>{item}</SectionTitle>
            <RealeasedBundledItem
              item={realeasedBundles[item]}
              onClick={() => deleteRealeasedBundled(item)}
              buttonType="danger"
              buttonText="delete"
            />
            {realeasedBundles[i + 1] && <SeparatorLine />}
          </>
        );
      })}
    </Container>
  );
};

export default RealeasedBundles;
