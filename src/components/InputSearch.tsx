import { Container } from '../styles/InputSearch';

export default function InputSearch(props: {
  handleClick: (ategoryId?: string, query?: string) => void,
  productSearch: string,
  setProductSearch: (vale: string) => void
}) {
  const { handleClick, productSearch, setProductSearch } = props;

  return (
    <Container>
      <input
        data-testid="query-input"
        type="text"
        value={ productSearch }
        onChange={ (e) => setProductSearch(e.target.value) }
      />
      <button
        data-testid="query-button"
        onClick={ () => handleClick('', productSearch) }
      >
        Buscar
      </button>
    </Container>
  );
}
