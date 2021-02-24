export default function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>8xp</span>
      <div>
        <div style={{ width: '50%', position: 'absolute' }} />

        <span className="current-experience" style={{ left: '50%' }}>
          300xp
          </span>
      </div>
      <span>600xp</span>
    </header>
  );
}
