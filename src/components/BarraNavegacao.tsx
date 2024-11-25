import { NavLink, Outlet } from 'react-router-dom';
import cartIcon from '../images/cart-icon.png';
import { CartProductListType } from '../types/types';
import { Containter, Cart, Title, Logo, CartIcon, LogoIcon,CartQuantity } from '../styles/BarraNavegacao';
import logo from '../images/Los_Pollos.webp';

type BarraNavegacaoType = {
  cartProducts: CartProductListType[];
};

export default function BarraNavegacao({ cartProducts }: BarraNavegacaoType) {
  const quantidadeItensCarrinho = cartProducts.reduce((prev, cur) => prev + cur.quantity, 0) || 0;

  return (
    <>
      <Containter>
        <Logo>
          <Title>
           <NavLink to="/">
            <LogoIcon>
            <img src={logo} alt="Los Pollos Logo" />
            </LogoIcon>

           </NavLink>
           

          </Title>
        </Logo>
        <Cart>
          <NavLink to="/cart">
            <CartIcon
              data-testid="shopping-cart-button"
              src={cartIcon}
              alt="cart-icon"
            />
          </NavLink><CartQuantity>

          {quantidadeItensCarrinho > 0 && (
            <p data-testid="shopping-cart-size">{quantidadeItensCarrinho}</p>
          )}
          </CartQuantity>
        </Cart>
      </Containter>
      <Outlet />
    </>
  );
}
