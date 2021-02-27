import styled from 'styled-components';

const ChallengeBoxStyled = styled.div`
    height: 100%;

    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 1rem;
`;

ChallengeBoxStyled.NotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 78%;
        margin-top: 3rem;
    }

    p img {
        margin-bottom: 1rem;
    }
`;

ChallengeBoxStyled.Active = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

    header {
        color: var(--blue);
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        strong {
            font-weight: 600;
            font-size: 2rem;
            color: var(--title);
            margin: 1.5rem 0 1rem;
        }

        p {
            line-height: 1.5;
        }
    }

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;

ChallengeBoxStyled.Button = styled.button`
        height: 3rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
            
        border: 0;
        border-radius: 5px;
            
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;
            
        transition: filter .2s;
            
        background: ${({ bg }) => bg};

        &:hover {
            filter: brightness(0.9);
        }
`;

export default ChallengeBoxStyled;