import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <section className={styles.gallerySection} id="works">
      <div className={styles.container}>
        
        {/* Заголовок блоку */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            БЕЗ СЛІВ. <span className={styles.highlight}>ТІЛЬКИ РЕЗУЛЬТАТ.</span>
          </h2>
          <p className={styles.subtitle}>
            Фото з нашого боксу. Реальні машини, реальні ремонти.
          </p>
        </div>

        {/* Сітка з фотографіями (Рівний квадрат 2х2) */}
        <div className={styles.grid}>
          
          {/* Фото 1: Інфініті */}
          <div className={styles.card}>
            <img src="/infiniti.jpg" alt="Ремонт Infiniti" className={styles.image} />
            <div className={styles.overlay}>
              <span>Діагностика та сервіс</span>
            </div>
          </div>

          {/* Фото 2: Мотор (ГБЦ) */}
          <div className={styles.card}>
            <img src="/engine-parts.jpg" alt="Ремонт ГБЦ" className={styles.image} />
            <div className={styles.overlay}>
              <span>Ремонт двигунів</span>
            </div>
          </div>

          {/* Фото 3: Вихлоп */}
          <div className={styles.card}>
            <img src="/exhaust.jpg" alt="Зварювання вихлопу" className={styles.image} />
            <div className={styles.overlay}>
              <span>Кастомний вихлоп</span>
            </div>
          </div>

          {/* 🔥 Фото 4: Збірка блоку (Закриваємо пусте місце!) */}
          <div className={styles.card}>
            <img src="/engine-assembly.jpg" alt="Блок двигуна" className={styles.image} />
            <div className={styles.overlay}>
              <span>Збірка двигуна</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;