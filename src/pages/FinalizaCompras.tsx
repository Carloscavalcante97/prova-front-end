import { ReactNode } from 'react';
import { CartProductListType } from '../types/types';
import styled from 'styled-components';

type FinalizaComprasType = {
  cartProducts: CartProductListType[];
  children: ReactNode;
};

const Container = styled.div`
  padding: 40px;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  color: #2a2a2a;
  font-weight: 500;
`;

const Product = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 25px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ProductDetails = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-top: 10px;
`;

const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  color: #2a2a2a;
  margin-top: 20px;
`;

export default function FinalizaCompras({ cartProducts, children }: FinalizaComprasType) {
  return (
    <Container>
      <Title>Revise suas compras</Title>
      {cartProducts.map(({ title, price, quantity, id, thumbnail }) => (
        <Product key={ id }>
          <ProductImage src={ thumbnail } alt={ title } />
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductDetails>{`Quantidade: ${quantity}`}</ProductDetails>
            <Price>{`Preço: R$${price * quantity} `}</Price>
          </ProductInfo>
        </Product>
      ))}
     
      {children}
      <TotalPrice>
        {`Total: R$${cartProducts.reduce((total,
           { price, quantity }) => total + price * quantity, 0).toFixed(2)}`}</TotalPrice>
    </Container>
  );
}
