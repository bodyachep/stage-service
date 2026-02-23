import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* КОЛОНКА 1: БРЕНД */}
        <div className={styles.col}>
          <div className={styles.logoBox}>
            <div 
              className={styles.logoImage} 
              style={{ maskImage: 'url(/white-logo.jpg)', WebkitMaskImage: 'url(/white-logo.jpg)' }}
            ></div>
            <span className={styles.brandName}>Stage Service</span>
          </div>
          <p className={styles.description}>
            Професійний ремонт двигунів у Києві. Беремося за складні випадки, від яких відмовляються інші. Працюємо на результат.
          </p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/stage.service.avto?igsh=d3gxZmJxcXV2b3J5" className={styles.socialIcon} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://t.me/Bankkable" className={styles.socialIcon} aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>

        {/* КОЛОНКА 2: КОНТАКТИ */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Контакти</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              {/* 🔥 СПРАВЖНЄ ПОСИЛАННЯ НА ПУХІВСЬКУ 2 В GOOGLE MAPS */}
              <a href="https://www.google.com/maps/search/?api=1&query=вулиця+Пухівська,+2,+Київ" target="_blank" rel="noreferrer" className={styles.contactLink}>
                м. Київ, вул. Пухівська, 2
              </a>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              {/* 🔥 РОБОЧИЙ НОМЕР */}
              <a href="tel:+380730905291" className={styles.contactLink}>
                +38 (073) 090 52 91
              </a>
            </li>
            <li>
              <span className={styles.contactIcon}>🕒</span>
              Без вихідних: 09:00 - 00:00<br/>
              <span className={styles.highlightText}>Виїзд майстра 24/7</span>
            </li>
          </ul>
        </div>

        {/* КОЛОНКА 3: КАРТА */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Як нас знайти</h4>
          <div className={styles.mapWrapper}>
            {/* 🔥 НЕВИДИМА КНОПКА ПОВЕРХ КАРТИ (перекидає в додаток Google Maps) */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=вулиця+Пухівська,+2,+Київ" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.mapOverlayLink}
              aria-label="Відкрити карту"
            ></a>
            
            {/* 🔥 СПРАВЖНЯ КАРТА ПУХІВСЬКОЇ 2 */}
            <iframe 
              src="https://maps.google.com/maps?q=вулиця+Пухівська,+2,+Київ&t=m&z=15&output=embed&iwloc=near" 
              className={styles.mapFrame}
              allowFullScreen="" 
              loading="lazy"
              title="Наш автосервіс на карті"
            ></iframe>
          </div>
        </div>

      </div>

      {/* НИЖНЯ ПОЛОСА */}
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Stage Service. Всі права захищені.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Політика конфіденційності</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;