import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export default function Countdown() {

    const { minutes, seconds, hasFinished, active, startCountdown, resetCountdown} = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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
