import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f9f9f9; /* Fundo suave */
  border-radius: 8px; /* Borda arredondada para o contêiner */

  /* Ajustando o input */
  input {
    padding: 0.8rem;
    width: 100%;
    max-width: 400px; /* Limite de largura para inputs */
    margin: 0.5rem 0;
    border-radius: 8px; /* Borda arredondada */
    border: 1px solid #ddd;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: #2FC18C; /* Cor de foco */
      box-shadow: 0 0 8px rgba(47, 193, 140, 0.3); /* Sombras suaves no foco */
    }
  }

  /* Estilos para o botão */
  button {
    padding: 0.8rem 1.5rem;
    color: white;
    background-color:#021F59;
    border: none;
    border-radius: 8px; /* Borda arredondada */
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #F2E205; /* Cor de hover mais escura */
      transform: scale(1.05); /* Efeito de aumento no botão */
    }

    &:active {
      background-color: #1f8d5f; /* Cor de clique */
    }
  }
`;
