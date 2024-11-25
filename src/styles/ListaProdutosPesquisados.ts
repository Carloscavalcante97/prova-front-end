import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1.5rem;
width: 70%;
`;

export const Card = styled.div`
height: 350px;
width: 300px;
`;

export const Product = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
height: 400px;
width: 300px;
padding: 2rem;
gap: 1rem;
box-shadow: 3px 3px 6px 2px #0000001D;

    p {
        text-align: center;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.2rem;
        text-decoration: none;
        color: black;
    }

    button {
        padding: 0.5rem;
        color: white;
        background-color:#021F59;
        border: none;
        box-shadow: 3px 3px 6px 2px #0000001D;
        font-weight: 600;
    }
        button:hover {
        color:#F2E205;
        }

`;

export const Frete = styled.p`
height: 20px;
`;
