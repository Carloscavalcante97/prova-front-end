import { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { CartProductListType, ProductListType,
  ProductcategoryType } from '../types/types';
import SideBarCategorias from '../components/SideBarCategorias';
import ListaProdutosPesquisados from '../components/ListaProdutosPesquisados';
import InputSearch from '../components/InputSearch';
import { Container, List, Products } from '../styles/InitialPage';

export default function InitialPage(props: {
  productList: CartProductListType[],
  setProductList: (state: CartProductListType[]) => void,
  cartProducts: CartProductListType[],
  setCartProducts: (products: any[]) => void
}) {
  const { productList, setProductList, cartProducts } = props;

  const [productcategory, setProductcategory] = useState<ProductcategoryType[]>([]);
  const [productSearch, setProductSearch] = useState<string>('');
  const [search, setSearch] = useState(
    'Digite algum termo de pesquisa ou escolha uma categoria.',
  );

  useEffect(() => {
    async function fetchCategory() {
      const response = await getCategories();
      setProductcategory(response);
    }
    fetchCategory();

    // Fetch products on initial load
    handleClick(); // This will trigger the product list fetch on page load
  }, []);

  const handleClick = async (categoryId = '', query = '') => {
    setProductSearch('');
    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    const listCheck = productList.length === 0;
    if (listCheck) setSearch('Produto não encontrado');
    const productDetailsList = response.results.map(
      ({
        title, id, price, available_quantity, shipping, thumbnail, attributes,
      }: ProductListType) => {
        const details = attributes.map(({ name, value_name }:
        { name: string; value_name: string }) => ({ name, value_name }));
        return {
          title,
          id,
          price,
          thumbnail,
          available_quantity,
          shipping: shipping.free_shipping,
          specification: details,
          quantity: 1,
        };
      },
    );

    setProductList(productDetailsList);
  };

  const listCheck = productList.length > 0;

  const handleAddCartClick = (product: CartProductListType) => {
    const { setCartProducts } = props;
    const data = [...cartProducts, product];
    setCartProducts(data);
    localStorage.setItem('cartProducts', JSON.stringify(data));
  };

  return (
    <Container>
      <InputSearch
        handleClick={ handleClick }
        productSearch={ productSearch }
        setProductSearch={ setProductSearch }
      />
      <Products>
        <List>
          <SideBarCategorias
            productcategory={ productcategory }
            handleClick={ handleClick }
          />
        </List>
        <ListaProdutosPesquisados
          handleAddCartClick={ handleAddCartClick }
          listCheck={ listCheck }
          productList={ productList }
          search={ search }
        />
      </Products>
    </Container>
  );
}
