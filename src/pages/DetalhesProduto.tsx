import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { CartProductListType } from '../types/types';
import { Container, ProductContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ActionButton, BackLink } from '../styles/DetalhesdProduto';
import FormAvaliacaoComentarios from '../components/FormAvaliacaoComentarios/FormAvaliacaoComentarios';

function DetalhesProduto(props: {
  productList: CartProductListType[],
  cartProducts: CartProductListType[],
  setCartProducts: (products: any[]) => void
}) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { productList } = props;
  const produto = productList.find((item: CartProductListType) => item.id === id);

  const handleAddCartClick = (product: CartProductListType) => {
    const { cartProducts, setCartProducts } = props;
    setCartProducts([...cartProducts, product]);
  };

  const { cartProducts } = props;
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

  if (!produto) {
    navigate('/');
    return <p>Produto não encontrado.</p>;
  }

  return (
    <>
      <BackLink to="/">Voltar à página inicial</BackLink>
      <Container>
        <ProductContainer>
          <ProductImage
            src={produto.thumbnail}
            alt={produto.title}
            data-testid="product-detail-image"
          />
          <ProductInfo>
            <ProductTitle data-testid="product-detail-name">{produto.title}</ProductTitle>
            <ProductPrice data-testid="product-detail-price">
              R$ {produto.price}
            </ProductPrice>
            <ActionButton
              onClick={() => navigate('/cart')}
            >
              Ir para o carrinho de compras
            </ActionButton>
            <ActionButton
              data-testid="product-detail-add-to-cart"
              onClick={() => handleAddCartClick(produto)}
            >
              Adicionar ao carrinho
            </ActionButton>
          </ProductInfo>
        </ProductContainer>
        <div>
          {id && <FormAvaliacaoComentarios id={id} />}
        </div>
      </Container>
    </>
  );
}

export default DetalhesProduto;
