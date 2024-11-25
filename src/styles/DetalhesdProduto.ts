import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BackLink = styled(NavLink)`
  font-size: 16px;
  color: #2d9cdb;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #2588d0;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductImage = styled.img`
  max-width: 200px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #2d9cdb;
  margin-bottom: 20px;
`;

export const ActionButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #2d9cdb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2588d0;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(45, 156, 219, 0.6);
  }
`;
