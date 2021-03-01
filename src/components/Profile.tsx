import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile(url: any, name: any) {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src={url} alt={name} />
            <div>
                <strong>{name}</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>  
                Level {level}
                </p>
            </div>
        </div>
    )
}
