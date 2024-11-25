import { Link } from "react-router-dom";
import { CartProductListType } from "../types/types";
import { Container, Frete, Product } from "../styles/ListaProdutosPesquisados";

export default function ListaProdutosPesquisados(props: {
  listCheck: boolean;
  productList: CartProductListType[];
  search: string;
  handleAddCartClick: (detail: CartProductListType) => void;
}) {
  const { listCheck, productList, search, handleAddCartClick } = props;

  return (
    <Container>
      {listCheck ? (
        <>
          {productList.map((detail: CartProductListType) => (
            <Product key={detail.id} data-testid="product">
              <Link
                data-testid="product-detail-link"
                to={`/detalhes/${detail.id}`}
              >
                <Frete>
                  {detail.shipping && (
                    <span data-testid="free-shipping">Frete Grátis</span>
                  )}
                </Frete>
                <img src={detail.thumbnail} alt="" />
                <p>{detail.title.slice(0, 50)}</p>
                <p>
                  R$
                  <span>{detail.price}</span>
                </p>
                <p>
                  {`Disponível: 
                    ${detail.available_quantity}`}
                </p>
              </Link>
              <button
                data-testid="product-add-to-cart"
                onClick={() => handleAddCartClick(detail)}
                tabindex="0"
              >
                Adicionar ao carrinho
              </button>
            </Product>
          ))}
        </>
      ) : (
        <p data-testid="home-initial-message">{!listCheck && search}</p>
      )}
    </Container>
  );
}
