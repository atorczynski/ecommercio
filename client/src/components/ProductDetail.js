import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  height: 100%;
  width: 100%;
  align-items: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 300px;
  max-width: 90%;
  min-width: 90%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 18px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 18px;
  margin: 0;
  object-fit: fill;
`;

const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  color: #232629;
  font-weight: normal;
  text-align: left;
`;

const ProductPrice = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #232629;
`;
const InfoText = styled.p`
  margin-bottom: -10px;
  font-family: 'Roboto Condensed', sans-serif;
  text-decoration: underline;
`;

const ProductDescription = styled.p`
  color: #232629;
  font-size: 11px;
`;

export default function ProductDetail(props) {
  return (
    <ProductDetailWrapper>
      <ImageWrapper>
        <Image src={props.imgSrc} alt="" />
      </ImageWrapper>
      <InfoContainer>
        <ProductTitle>{props.productTitle}</ProductTitle>
        <InfoText>Price:</InfoText>
        <ProductPrice> {props.productPrice}€</ProductPrice>
        <InfoText>Description:</InfoText>
        <ProductDescription>{props.productDescription}</ProductDescription>
      </InfoContainer>
      <a href={props.shopURL}>
        <Button>Shop</Button>
      </a>
    </ProductDetailWrapper>
  );
}
