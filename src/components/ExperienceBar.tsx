import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>8xp</span>
      <div>
        <div style={{ width: '50%', position: 'absolute' }} />

        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300xp
          </span>
      </div>
      <span>600xp</span>
    </header>
  );
}
