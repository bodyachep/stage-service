import { useState } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const engineImages = [
    "/images/engine-gallery/engine-1.jpg",
    "/images/engine-gallery/engine-2.jpg",
    "/images/engine-gallery/engine-3.jpg",
    "/images/engine-gallery/engine-4.jpg",
    "/images/engine-gallery/engine-5.jpg",
    "/images/engine-gallery/engine-6.jpg",
  ];

  const indicators = [
    {
      id: 'oil',
      name: 'Тиск мастила',
      color: '#FF1111', 
      type: 'alert',
      message: 'КРИТИЧНА ПОМИЛКА! Негайно зупиніть двигун. Їзда без тиску мастила призведе до повного знищення мотора. Вам потрібна евакуація та термінова діагностика.',
      src: '/oil-level.svg'
    },
    {
      id: 'engine',
      name: 'Check Engine',
      color: '#FFB300', 
      type: 'gallery',
      src: '/engine-outline.svg'
    },
    {
      id: 'temp',
      name: 'Температура',
      color: '#FF1111', 
      type: 'alert',
      message: 'Двигун перегрівається! Зупиніться та дайте йому охолонути. Подальший рух призведе до деформації головки блоку (ГБЦ) і дороговартісного ремонту.',
      src: '/coolant-temperature.svg' // ОНОВЛЕНО: Використовуємо твій новий файл
    },
    {
      id: 'battery',
      name: 'Акумулятор',
      color: '#FF1111', 
      type: 'alert',
      message: 'Немає зарядки! Можливо, обірвало ремінь генератора або вийшов з ладу сам генератор. Автомобіль заглохне, щойно розрядиться АКБ.',
      src: '/car-battery.svg'
    },
    {
      id: 'abs',
      name: 'ABS',
      color: '#FFB300', 
      type: 'alert',
      message: 'Відмовила антиблокувальна система. Гальма працюють, але при екстреному гальмуванні авто може піти в занос. Потрібна комп\'ютерна діагностика.',
      src: '/car-brake-abs.svg'
    },
    {
      id: 'glowplug',
      name: 'Спіраль / DPF',
      color: '#FFB300', 
      type: 'alert',
      message: 'Проблема з сажовим фільтром (DPF) або свічками розжарення. Машина може втратити тягу. Ми можемо вирізати фільтр та зварити кастомний вихлоп!',
      src: '/car-esp.svg'
    }
  ];

  const handleIndicatorClick = (indicator) => {
    if (indicator.type === 'gallery') {
      setCurrentImageIndex(0);
      setIsGalleryOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setSelectedAlert(indicator);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModals = () => {
    setIsGalleryOpen(false);
    setSelectedAlert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Що у вас <span className={styles.highlight}>горить на приборці?</span>
          </h2>
        </div>

        {/* ЧОРНИЙ БЛОК З ОБВОДКОЮ */}
        <div className={styles.dashboardCluster}>
          {indicators.map((ind) => (
            <div 
              key={ind.id} 
              className={styles.indicatorWrapper} 
              onClick={() => handleIndicatorClick(ind)}
              style={{ '--glow-color': ind.color }} 
            >
              <div className={styles.iconBox}>
                {/* Всі іконки тепер використовують маску для файлів */}
                <div 
                  className={styles.iconMask}
                  style={{ 
                    maskImage: `url(${ind.src})`, 
                    WebkitMaskImage: `url(${ind.src})` 
                  }}
                />
              </div>
              <span className={styles.iconLabel}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* МОДАЛКА: ПОМИЛКИ */}
      {selectedAlert && (
        <div className={styles.modalOverlay} onClick={closeModals}>
          <div className={styles.alertModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModals}>&times;</button>
            <div 
              className={styles.alertIconBig} 
              style={{ color: selectedAlert.color, filter: `drop-shadow(0 0 20px ${selectedAlert.color})` }}
            >
              <div className={styles.iconMaskBig} style={{ maskImage: `url(${selectedAlert.src})`, WebkitMaskImage: `url(${selectedAlert.src})`, backgroundColor: selectedAlert.color }} />
            </div>
            <h3 className={styles.alertTitle}>{selectedAlert.name}</h3>
            <p className={styles.alertMessage}>{selectedAlert.message}</p>
            
            <div className={styles.alertActions}>
              <a href="tel:+380730905291" className={styles.callButton}>
                📞 Дзвонити майстру
              </a>
              <button className={styles.cancelButton} onClick={closeModals}>Зрозумів</button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛКА: ГАЛЕРЕЯ */}
      {isGalleryOpen && (
        <div className={styles.modalOverlay} onClick={closeModals}>
          <div className={styles.galleryModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtnGallery} onClick={closeModals}>&times;</button>
            <img 
              src={engineImages[currentImageIndex]} 
              alt={`Ремонт двигуна ${currentImageIndex + 1}`} 
              className={styles.galleryImage} 
            />
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => setCurrentImageIndex((p) => (p === 0 ? engineImages.length - 1 : p - 1))}>&#10094;</button>
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => setCurrentImageIndex((p) => (p + 1) % engineImages.length)}>&#10095;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;