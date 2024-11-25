import styled from 'styled-components';

export const SidebarContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%; /* Garantir que o container da lista ocupe toda a largura */
`;

export const CategoryItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center; /* Alinhar o conteúdo dentro do item */
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2fc18c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  /* Garantir que o texto apareça mesmo sem interação */
  opacity: 1;  /* Certifique-se de que a opacidade não está afetada */
  visibility: visible;  /* Certifique-se de que o botão está visível */

  &:hover {
    background-color: #259a6e;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(47, 193, 140, 0.7);
  }

  &:active {
    background-color: #1e7d59;
  }
`;
