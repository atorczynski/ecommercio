import React from 'react';
import styled from '@emotion/styled';

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;
const ImageWrapper = styled.div`
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

const ProductTitle = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  text-align: left;
  color: #707070;
`;

const ProductPrice = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  text-align: left;
  color: #707070;
`;
const InfoText = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  color: #707070;
`;

export default function ProductDetails(props) {
  return (
    <ProductDetailWrapper>
      <ImageWrapper>
        <Image src={props.imgSrc} alt="" />
      </ImageWrapper>
      <InfoContainer>
        <ProductTitle>{props.productTitle}</ProductTitle>
        <ProductPrice> {'Price: ' + props.productPrice} €</ProductPrice>
        <InfoText>{'Brand Name: ' + props.productBrand}</InfoText>
        <InfoText>{'Description: ' + props.productDescription}</InfoText>
      </InfoContainer>
    </ProductDetailWrapper>
  );
}
