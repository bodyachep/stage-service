import React from 'react';
import styles from './About.module.css';
import Divider from '../../components/Divider/Divider';

const About = () => {
  return (
    <section className={styles.pageWrapper}>
      {/* === ВЕРХНІЙ БЛОК (HERO) === */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              БІЛЬШЕ НІЖ <span className={styles.highlight}>ПРОСТО СТО</span>
            </h1>
            <p className={styles.heroDescription}>
              Ми знаємо, як боляче довіряти своє авто в чужі руки. Тому ми створили сервіс, де <b>прозорість і якість</b> стоять на першому місці.
            </p>
            <p className={styles.heroDescription}>
              Кожен гвинтик, кожна прокладка — все під контролем. Наш профіль — це складні ремонти двигунів, за які інші навіть не беруться.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statText}>Років досвіду</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5.0</span>
                <span className={styles.statText}>Рейтинг Google</span>
              </div>
              {/* 🔥 НОВА СТАТИСТИКА */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statText}>Без вихідних</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <div className={styles.engineGlow}></div>
            <img src="/engine.png" alt="Двигун" className={styles.heroImage} />
          </div>
        </div>
      </div>

      <Divider />

      {/* === СЕКЦІЯ "НАША ІСТОРІЯ ТА СЕРВІС" === */}
      <div className={styles.storySection}>
        <div className={styles.container}>
          
          {/* БЛОК 1: Текст зліва, Фото справа */}
          <div className={styles.storyRow}>
            <div className={styles.storyText}>
              <h3 className={styles.storyTitle}>Фанатична увага до <span className={styles.highlight}>деталей</span></h3>
              <p>
                Ми не просто "крутимо гайки". Ми проводимо детальну дефектовку, використовуємо ендоскоп та сучасну діагностику, щоб знайти першопричину поломки, а не лікувати симптоми. Ви завжди знаєте, за що платите, отримуючи фото- та відеозвіти процесу.
              </p>
            </div>
            <div className={styles.storyImageWrapper}>
              <img src="/about-process.jpg" alt="Процес діагностики" className={styles.storyImage} />
            </div>
          </div>

          {/* БЛОК 2: Фото зліва, Текст справа (Реверс) */}
          <div className={`${styles.storyRow} ${styles.rowReverse}`}>
            <div className={styles.storyText}>
              <h3 className={styles.storyTitle}>Команда <span className={styles.highlight}>професіоналів</span></h3>
              <p>
                Наші мотористи — це люди з бензином у крові та більш ніж 10-річним досвідом. Вони постійно навчаються, освоюють нові технології двигунів (від класики до сучасних TSI/TFSI) і беруться за випадки, від яких відмовилися інші сервіси.
              </p>
            </div>
            <div className={styles.storyImageWrapper}>
              <img src="/about-team.jpg" alt="Наш майстер" className={styles.storyImage} />
            </div>
          </div>

          {/* 🔥 БЛОК 3: НОВИЙ БЛОК ПРО СЕРВІС ТА ВИЇЗД (Текст зліва, Фото справа) */}
          <div className={styles.storyRow}>
            <div className={styles.storyText}>
              <h3 className={styles.storyTitle}>Ваш комфорт — наш <span className={styles.highlight}>пріоритет</span></h3>
              <p>
                Поломка не обирає зручний час, тому ми працюємо <b>без вихідних</b> та залишаємось на зв'язку <b>24/7</b>. Ми робимо все, щоб ремонт був для вас максимально безстресовим:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ marginBottom: '10px' }}>
                  🚗 <b>Виїзд майстра:</b> Оперативний виїзд по всьому Києву для огляду та діагностики авто на місці.
                </li>
                <li>
                  🛠 <b>Безкоштовна діагностика:</b> У разі подальшого ремонту на нашому СТО, діагностика для вас буде абсолютно безкоштовною (0 грн).
                </li>
              </ul>
            </div>
            <div className={styles.storyImageWrapper}>
              <img src="/about-service.jpg" alt="Виїзд майстра Київ" className={styles.storyImage} />
            </div>
          </div>

          {/* БЛОК 4: Дві фотографії поруч */}
          <div className={styles.doubleImageBlock}>
             <h3 className={styles.storyTitleCentered}>Наш <span className={styles.highlight}>простір</span></h3>
             <p className={styles.storySubtitleCentered}>Чистота, порядок та професійне обладнання — запорука якісного ремонту.</p>
            <div className={styles.doubleImageGrid}>
              <div className={styles.storyImageWrapper}>
                 <img src="/about-shop-1.jpg" alt="Бокс СТО" className={styles.storyImage} />
              </div>
              <div className={styles.storyImageWrapper}>
                 <img src="/about-shop-2.jpg" alt="Обладнання" className={styles.storyImage} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;