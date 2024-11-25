import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 1rem;

    :first-child{
        display: flex;
    }

 p {
    display: inline-block;
    margin-left: 1rem;
 }
`;
