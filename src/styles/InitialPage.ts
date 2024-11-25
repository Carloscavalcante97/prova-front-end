import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #F5F5F5;

`;
export const Products = styled.div`
display: flex;
gap: 2rem;
`;

export const List = styled.ul`
box-shadow: 3px 3px 6px 0px #0000000D;
background-color: white;
padding: 3rem;
list-style: none;

    button {
        border: none;
        background-color: transparent;
        margin-top: 1rem;
        }

    button:hover {
        color:#F2E205;
        }
`;
