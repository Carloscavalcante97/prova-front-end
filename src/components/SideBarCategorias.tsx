import { ProductcategoryType } from '../types/types';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  padding: 1rem;
  background-color: #021F59;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 1rem;
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #2fc18c;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F2E205;
  }

  &:focus {
    outline: none;
  }
`;

export default function SideBarCategorias(props: {
  productcategory: ProductcategoryType[];
  handleClick: (categoryId?: string, query?: string) => void;
}) {
  const { productcategory, handleClick } = props;

  return (
    <SidebarContainer>
      <CategoryList>
        {productcategory.length > 0 ? (
          productcategory.map(({ name, id }) => (
            <CategoryItem key={id}>
              <CategoryButton
                data-testid="category"
                onClick={() => handleClick(id)}
              >
                {name}
              </CategoryButton>
            </CategoryItem>
          ))
        ) : (
          <p>Carregando categorias...</p>
        )}
      </CategoryList>
    </SidebarContainer>
  );
}
