import styles from './FeaturesList.module.css';

const FeaturesList = () => {
  const features = [
    {
      id: 1,
      title: 'Те, від чого відмовляються інші — ми робимо',
      desc: '',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    },
    {
      id: 2,
      title: 'Виїзд майстра до Вас',
      desc: 'Зекономимо Ваш час. Приїдемо туди, де зручно вам',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
    },
    {
      id: 3,
      title: 'Дотягнемо на тросу, якщо потрібно',
      desc: 'Не залишимо Вас посеред дороги',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14h6v6h-6zM3 4h6v6H3zM9 7h6M15 17H9v-6"/></svg>
    },
    {
      id: 4,
      title: 'Наш підхід',
      desc: 'Ми ремонтуємо так, ніби працюємо зі своїм власним авто. Без "костилів", без тяп-ляп',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.list}>
          {features.map((item) => (
            <div key={item.id} className={styles.listItem}>
              <div className={styles.iconBox}>
                {item.icon}
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.desc && <p className={styles.itemDesc}>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;