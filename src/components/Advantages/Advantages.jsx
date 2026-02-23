import styles from './Advantages.module.css';

const Advantages = () => {
  const listItems = [
    "Складні випадки – наша фішка",
    "Повна прозорість роботи",
    "Працюємо швидко, але якісно",
    "Детальна дефектовка з поясненням",
    "Виїзд майстра",
    "На зв'язку 24/7"
  ];

  return (
    <section className={styles.section} id="about">
      {/* Червоний фон-хвиля */}
      <div className={styles.redBackground}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* Список переваг (тепер точно тільки на білому) */}
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet}></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Скляні картки */}
          <div className={styles.cardsWrapper}>
            <div className={styles.cardsRow}>
              {/* КЛІКАБЕЛЬНА АДРЕСА */}
              <a 
                href="https://maps.app.goo.gl/Z17gU6V2L4jAQQwY9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.glassCard} ${styles.redCard}`}
              >
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>вул. Пантелеймона Куліша, 2</span>
              </a>
              
              {/* Темна картка телефону */}
              <a href="tel:+380730905291" className={`${styles.glassCard} ${styles.darkCard}`}>
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <span>+38 (073) 090 52 91</span>
              </a>
            </div>

            {/* Широка картка виїзду */}
            <div className={`${styles.glassCard} ${styles.wideCard}`}>
              <div className={styles.iconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <span>Виїзд майстра до вас</span>
              <div className={styles.dashedLine}>
                <div className={styles.dot}></div>
              </div>
            </div>
          </div>

          <div className={styles.slideNumber}>/ 02</div>
        </div>

        {/* Фото майстра */}
        <div className={styles.imageWrapper}>
          <img src="/master.png" alt="Майстер Stage Service" className={styles.masterImage} />
        </div>
      </div>
    </section>
  );
};

export default Advantages;