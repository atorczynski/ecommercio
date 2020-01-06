import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  min-width: 98%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 150px;
  background: #fff;
  border-radius: 5%;
`;
const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 125px;
  max-height: 100%;
  min-height: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  object-fit: contain;
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
  margin-top: 10px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: 10px;
  flex-basis: 100%;
  flex-direction: row;
  height: 50px;
`;

const InfoText = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  margin: 5px 0px 0px 0px;
  color: #707070;
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const FunctionWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
`;
const FunctionButton = styled(Button)`
  height: 15px;
  width: 65px;
  margin: 0;
  font-size: 12px;
`;

const Seperator = styled.hr`
  width: 220px;
  height: 0px;
  margin-top: 15px;
  border: 1px solid #ed462e;
  font-family: 'Roboto';
  margin-top: 35px;
  opacity: 0.3;
`;

export default function ProductElement(props) {
  return (
    <Wrapper>
      <ProductWrapper>
        <ImageWrapper>
          <Link to={`/products/${props.productIDLink}`}>
            <Image src={props.imgSrc} alt="" />
          </Link>
        </ImageWrapper>
        <ContentWrapper>
          <InfoBoxWrapper>
            <InfoBox>
              <InfoText>{props.productName}</InfoText>
            </InfoBox>
            <InfoBox>
              <InfoText>Referrals: {props.productRefCount}</InfoText>
            </InfoBox>
            <InfoBox>
              <InfoText>
                Price: {props.productPrice} <span>€</span>
              </InfoText>
            </InfoBox>
          </InfoBoxWrapper>
          <Seperator />
          <FunctionWrapper>
            <FunctionButton onClick={props.onClickRefresh}>Refresh</FunctionButton>
            <FunctionButton onClick={props.onClickDelete}>Delete</FunctionButton>
          </FunctionWrapper>
        </ContentWrapper>
      </ProductWrapper>
    </Wrapper>
  );
}
