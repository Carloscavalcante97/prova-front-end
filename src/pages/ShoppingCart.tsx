import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import EmptyShoppingCart from '../components/EmptyShoppingCart';
import { CartProductListType } from '../types/types';
import styled from 'styled-components';

interface ShoppingCartProps {
  cartProducts: CartProductListType[],
  setCartProducts: (products: any[]) => void,
}

// Estilizando os componentes com styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #38A169; // Cor de verde similar ao Tailwind
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #3182ce; // Azul similar ao Tailwind
  color: white;
  border: none;
  border-radius: 0.375rem;
  &:hover {
    background-color: #2b6cb0;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #e53e3e; // Vermelho similar ao Tailwind
  &:hover {
    background-color: #c53030;
  }
`;

const CheckoutButton = styled(Button)`
  margin-top: 1rem;
  background-color: #48bb78; // Verde similar ao Tailwind
  &:hover {
    background-color: #38a169;
  }
`;

const ShoppingCart = ({ cartProducts, setCartProducts }: ShoppingCartProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cardProducts');
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, [setCartProducts]);

  const increaseQuantity = (id: string) => {
    const updatedCart = cartProducts.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartProducts(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cartProducts
      .map((product) => {
        if (product.id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);
    setCartProducts(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  const removeProduct = (id: string) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  return (
    <>
      <NavLink to="/" style={{ color: '#3182ce', textDecoration: 'underline' }}>Início</NavLink>
      <Container>
        {(cartProducts.length === 0 || !cartProducts) ? (
          <EmptyShoppingCart />
        ) : (
          cartProducts.map((product) => (
            <CartItem key={product.id}>
              <Title data-testid="shopping-cart-product-name">{product.title}</Title>
              <p>{`Disponível: ${product.available_quantity}`}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: '6rem', height: '6rem', objectFit: 'cover' }}
              />
              <Price>{`Preço: ${(product.price * product.quantity).toFixed(2)}`}</Price>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} data-testid="shopping-cart-product-quantity">
                <Button
                  disabled={product.quantity === product.available_quantity}
                  onClick={() => increaseQuantity(product.id)}
                  data-testid="product-increase-quantity"
                >
                  +
                </Button>
                <Button
                  disabled={product.quantity === 1}
                  onClick={() => decreaseQuantity(product.id)}
                  data-testid="product-decrease-quantity"
                >
                  -
                </Button>
                <RemoveButton onClick={() => removeProduct(product.id)} data-testid="remove-product">
                  Remover
                </RemoveButton>
              </div>
            </CartItem>
          ))
        )}
      </Container>
      <CheckoutButton
        data-testid="checkout-products"
        onClick={() => navigate('/checkOut')}
      >
        Finalizar Compra
      </CheckoutButton>
    </>
  );
};

export default ShoppingCart;
