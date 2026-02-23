import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            Зламалось авто і немає часу <br/> займатися ремонтом?
          </h2>
          <p className={styles.subtitle}>
            Наш майстер приїде до Вас, <span className={styles.highlight}>швидко, якісно, професійно!</span>
          </p>
        </div>

        <div className={styles.gridContainer}>
          {/* Картка 1 */}
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <p className={styles.cardText}>Огляне авто</p>
          </div>

          {/* Картка 2 */}
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <p className={styles.cardText}>Проведе діагностику</p>
          </div>

          {/* Картка 3 */}
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <p className={styles.cardText}>Знайде причину поломки</p>
          </div>

          {/* Картка 4 */}
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4 2.6 2.6 0 0 0-3.7 0l-3 3Z"></path><path d="M9.7 11.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4 2.6 2.6 0 0 0-3.7 0l-3 3Z"></path><path d="M2 22a2 2 0 0 1 0-2.8l9-9"></path><path d="M13 13l9-9"></path></svg>
            </div>
            <p className={styles.cardText}>Запропонує рішення та ремонт</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;