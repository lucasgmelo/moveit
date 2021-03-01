import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile({url, username}) {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src={url} alt='Lucas Melo' />
            <div>
                <strong>{username}</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>  
                Level {level}
                </p>
            </div>
        </div>
    )
}
