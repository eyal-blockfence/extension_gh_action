import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    min-width: 350px;
    min-height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    color: white;
    background: black;

    & > h1 {
        margin-bottom: 1rem;
    }
`;
