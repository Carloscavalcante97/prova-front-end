import styled from 'styled-components';

export const Containter = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color:#021F59;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  color: #05C7F2;

  h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
    color: #777;
  }
`;

export const LogoIcon = styled.div`
  img {
    width: 120px;
    height: auto;
    border-radius: 8px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CartIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartQuantity = styled.p`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 14px;
  color: #F2E205;
  background-color:#021F59;
  border-radius: 50%;
  padding: 5px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
