import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* ВЕЛИЧЕЗНИЙ ЧЕРВОНИЙ ТЕКСТ НА ФОНІ */}
      <div className={styles.bgText}>STAGE</div>

      <div className={styles.container}>
        
        {/* Ліва частина: Текст та кнопки */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Складні випадки – <br />
            <span className={styles.highlight}>наша фішка</span>
          </h1>
          <p className={styles.subtitle}>
            Ремонтуємо так, ніби працюємо зі своїм власним авто. Без "костилів", без тяп-ляп. Наш майстер приїде до Вас — швидко, якісно, професійно!
          </p>
          
          <div className={styles.buttons}>
            <a href="#services" className={styles.primaryBtn}>Наші послуги</a>
            <a href="tel:+380730905291" className={styles.secondaryBtn}>+38 (073) 090 52 91</a>
          </div>
        </div>

        {/* Права частина: Відео з діагностикою */}
        <div className={styles.mediaContent}>
          <div className={styles.videoWrapper}>
            <video 
              src="/diagnostic.mov" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className={styles.video}
            ></video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;