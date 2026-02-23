import styles from './Difference.module.css';

const Difference = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Заголовок (зверху, нічого його не перекриває) */}
        <h2 className={styles.title}>
          Чим <span className={styles.highlight}>ми відрізняємось</span><br />
          від інших СТО?
        </h2>

        {/* Блок із двигуном та фоновим текстом */}
        <div className={styles.engineWrapper}>
          <div className={styles.bgText}>STAGE</div>
          {/* Твій двигун-стікер */}
          <img src="/engine.png" alt="Двигун" className={styles.engineImage} />
        </div>

        {/* Нижній текст зі стрілкою (1 в 1 як на фото) */}
        <div className={styles.footer}>
          <div className={styles.footerText}>
            <p className={styles.boldText}>Більше деталей ми розповідаємо</p>
            <p className={styles.boldText}>на <span className={styles.highlight}>наступному слайді</span></p>
            <span className={styles.slideNumber}>/ 01</span>
          </div>
          <div className={styles.arrow}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E60000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Difference;