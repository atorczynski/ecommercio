import React from 'react';
import styled from '@emotion/styled';

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 100px;
`;

const OverviewHeading = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
  color: ${props => props.theme.color.primary};
`;

const OverviewText = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  color: ${props => props.theme.color.primary};
`;

export default function OverView(props) {
  return (
    <OverviewWrapper>
      <OverviewHeading>Overview</OverviewHeading>
      <OverviewText>Current Product Count: {props.count}</OverviewText>
      <OverviewText>Total Referrals: {props.referralsCount}</OverviewText>
    </OverviewWrapper>
  );
}
