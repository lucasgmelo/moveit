import styled from 'styled-components';

const CompletedChallengesStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d7d8da;

    font-weight: 600;

    &:first-child {
        font-size: 1.25rem;
    }

    &:last-child {
        font-size: 1.5rem;
    }
`

export default CompletedChallengesStyled;