import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Біле лого для чорної шапки */}
        <a href="/" className={styles.logo}>
          <img src="/white-logo.jpg" alt="Stage Service Logo" />
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <Link to="/" className={styles.link} onClick={toggleMenu}>Головна</Link>
          <Link to="/about" className={styles.link} onClick={toggleMenu}>Про нас</Link>
          <Link to="/services" className={styles.link} onClick={toggleMenu}>Послуги</Link>
          <Link to="/reviews" className={styles.link} onClick={toggleMenu}>Відгуки</Link>

          <a href="tel:+380730905291" className={styles.ctaButton}>
            +38 (073) 090 52 91
          </a>
        </nav>

        <button className={styles.burger} onClick={toggleMenu}>
          <span className={isMobileMenuOpen ? styles.lineOpen1 : styles.line}></span>
          <span className={isMobileMenuOpen ? styles.lineOpen2 : styles.line}></span>
          <span className={isMobileMenuOpen ? styles.lineOpen3 : styles.line}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;