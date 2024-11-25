import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import './index.css';
import ShoppingCart from './pages/ShoppingCart';
import InitialPage from './pages/InitialPage';
import { CartProductListType } from './types/types';
import DetalhesProduto from './pages/DetalhesProduto';
import FinalizaCompras from './pages/FinalizaCompras';
import FormFinalizaCompras from './components/FormFinalizaCompras/FormFinalizaCompras';
import BarraNavegacao from './components/BarraNavegacao';

function App() {
  const [productList, setProductList] = useState<CartProductListType[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProductListType[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartProducts');
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, []);

  return (
    <Routes>
      <Route element={ <BarraNavegacao cartProducts={ cartProducts } /> }>
        <Route
          path="/"
          element={ <InitialPage
            productList={ productList }
            setProductList={ setProductList }
            cartProducts={ cartProducts }
            setCartProducts={ setCartProducts }
          /> }
        />
        <Route
          path="/cart"
          element={ <ShoppingCart
            cartProducts={ cartProducts }
            setCartProducts={ setCartProducts }
          /> }
        />
        <Route
          path="/detalhes/:id"
          element={ <DetalhesProduto
            productList={ productList }
            cartProducts={ cartProducts }
            setCartProducts={ setCartProducts }
          /> }
        />
        <Route
          path="/checkOut"
          element={
            <FinalizaCompras
              cartProducts={ cartProducts }
            >
              <FormFinalizaCompras
                setCartProducts={ setCartProducts }
              />
            </FinalizaCompras>
}
        />
      </Route>
    </Routes>
  );
}

export default App;
