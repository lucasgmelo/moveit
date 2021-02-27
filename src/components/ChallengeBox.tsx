import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import ChallengeBoxStyled from '../styles/components/ChallengeBox';

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <ChallengeBoxStyled>
           { activeChallenge ? (
               <ChallengeBoxStyled.Active>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>Novo Desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <ChallengeBoxStyled.Button type="button"
                       bg='#e83f5b'
                       onClick={handleChallengeFailed}
                       >Falhei</ChallengeBoxStyled.Button>
                       <ChallengeBoxStyled.Button type="button"
                       bg='#4cd62b'
                       onClick={handleChallengeSucceded}
                       >Completei</ChallengeBoxStyled.Button>
                   </footer>
               </ChallengeBoxStyled.Active>
           ) : (
            <ChallengeBoxStyled.NotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level completando desafios.
            </p>
            </ChallengeBoxStyled.NotActive>
           )}
        </ChallengeBoxStyled>
    )
}
