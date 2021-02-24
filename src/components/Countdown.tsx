import styles from '../styles/components/Countdown.module.css';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
    const [time, setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengesContext)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time -1);
            }, 1000)
        } else if(active && time === 0) {
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    }, [active, time]);

    return (
        <>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled 
                className={styles.countdownButton} > 
                <p>Ciclo encerrado</p>
                <img src="icons/" alt=""/>
                </button>
            ) : (
                <>
                { active ? ( 
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}> 
                    Abandonar ciclo
                    </button>
                ) : ( 
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}> 
                    Iniciar um ciclo
                    </button>
                )
            }
                </>
             )
            }

            
        </>
    )
}
