import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import CompletedChallengesStyled from '../styles/components/CompletedChallenges';

function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext);

    return (
        <CompletedChallengesStyled>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesStyled>
    )
}

export default CompletedChallenges
