import React from 'react';
import styled from '@emotion/styled';

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Seperator = styled.hr`
  width: 273px;
  height: 0px;
  background: transparent;
  border: 1px solid #ed462e;
  opacity: 0.17;
`;

const OverviewHeading = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
  color: #707070;
`;

const OverviewText = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  color: #707070;
`;

export default function OverView(props) {
  return (
    <OverviewWrapper>
      <Seperator />
      <OverviewHeading>Overview</OverviewHeading>
      <OverviewText>Current Product Count: {props.productCount}</OverviewText>
      <OverviewText>Total Referrals: {props.totalRefCount}</OverviewText>
      <OverviewText>Referrals last 7d: {props.refsLastWeek}</OverviewText>
    </OverviewWrapper>
  );
}
