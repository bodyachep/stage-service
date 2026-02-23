import React, { useState } from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    id: 1,
    title: 'Діагностика автомобіля',
    icon: '/car-search.svg', /* НОВА ІКОНКА */
    items: [
      { name: 'Комплексна діагностика автомобіля (58 пунктів)', price: '1000 грн' }, /* ПРИБРАНО "Від" */
      { name: 'Комп\'ютерна діагностика', price: '1100 грн' },
      { name: 'Діагностика системи живлення автомобіля', price: '700 грн' },
      { name: 'Діагностика кондиціонера (візуальний огляд)', price: '400 грн' },
      { name: 'Передпродажна діагностика авто', price: '3600 грн' },
      { name: 'Ендоскопія бензинового двигуна (1 циліндр)', price: '700 грн' },
      { name: 'Перевірка акумулятора', price: '150 грн' },
      { name: 'Перевірка лакофарбового покриття', price: '500 грн' },
    ]
  },
  {
    id: 2,
    title: 'Кермове управління',
    icon: './icon-stering.svg', /* НОВА ІКОНКА */
    items: [
      { name: 'Заміна кермового наконечника', price: 'Від 1198 грн' },
      { name: 'Заміна кермової тяги', price: 'Від 1198 грн' },
      { name: 'Ремонт кермової рейки / колонки', price: 'Від 9888 грн' },
      { name: 'Заміна насоса гідропідсилювача', price: 'Від 2488 грн' },
      { name: 'Регулювання кермової рейки', price: 'Від 1598 грн' },
      { name: 'Заміна пильника кермової рейки', price: 'Від 1198 грн' },
    ]
  },
  {
    id: 3,
    title: 'Система зчеплення та КПП',
    icon: '/car-shift-pattern.svg', /* НОВА ІКОНКА */
    items: [
      { name: 'Заміна зчеплення (без зняття підрамника)', price: 'Від 3988 грн' },
      { name: 'Заміна зчеплення (зі зняттям підрамника)', price: 'Від 5498 грн' },
      { name: 'Заміна зчеплення (повний привід)', price: 'Від 5198 грн' },
      { name: 'Проточка маховика', price: 'Від 1598 грн' },
      { name: 'Заміна робочого циліндра зчеплення', price: 'Від 1400 грн' },
      { name: 'Заміна вижимного підшипника', price: 'Від 5000 грн' },
    ]
  },
  {
    id: 4,
    title: 'Система запалювання',
    icon: '/icon-spark.svg',
    items: [
      { name: 'Заміна свічок запалювання 4шт (Без зняття колектора)', price: 'Від 698 грн' },
      { name: 'Заміна свічок запалювання 6шт (Зі зняттям колектора)', price: 'Від 2500 грн' },
      { name: 'Заміна свічок запалювання 1шт (Опозит)', price: 'Від 489 грн' },
      { name: 'Заміна свічок накалу 4шт', price: 'Від 2490 грн' },
      { name: 'Заміна свічок накалу 6шт (без зняття колектору)', price: 'Від 2000 грн' },
      { name: 'Монтаж / демонтаж колектора', price: 'Від 1598 грн' },
      { name: 'Заміна катушки запалювання', price: 'Від 400 грн' },
    ]
  },
  {
    id: 5,
    title: 'Система охолодження',
    icon: '/icon-cooling.svg',
    items: [
      { name: 'Заміна радіатора двигуна', price: 'Від 2500 грн' },
      { name: 'Заміна термостату', price: 'Від 1600 грн' },
      { name: 'Заміна термостату з корпусом у зборі', price: 'Від 4700 грн' },
      { name: 'Заміна насоса системи охолодження (без зняття ГРМ)', price: 'Від 2000 грн' },
    ]
  },
  {
    id: 6,
    title: 'Заміна технічних рідин та фільтрів',
    icon: '/icon-oil.svg',
    items: [
      { name: 'Заміна мастила в двигуні', price: 'Від 700 грн' },
      { name: 'Повна заміна рідини АКПП із заміною фільтра', price: 'Від 2500 грн' },
      { name: 'Часткова заміна рідини в АКПП із заміною фільтра', price: 'Від 2000 грн' },
      { name: 'Заміна рідини коробки DSG', price: 'Від 1500 грн' },
      { name: 'Заміна оливи в механічній КПП', price: 'Від 1000 грн' },
      { name: 'Заміна рідини системи охолодження', price: 'Від 1000 грн' },
      { name: 'Заміна фільтру повітря / салону', price: 'Від 300 грн' },
      { name: 'Заміна паливного фільтра', price: 'Від 600 грн' },
    ]
  },
  {
    id: 7,
    title: 'Ходова частина',
    icon: '/icon-suspension.svg',
    items: [
      { name: 'Заміна стійки стабілізатора', price: 'Від 600 грн' },
      { name: 'Заміна амортизатора (вставка / з пружиною)', price: 'Від 800 грн' },
      { name: 'Заміна підшипника ступиці', price: 'Від 1800 грн' },
      { name: 'Заміна кульової опори', price: 'Від 1400 грн' },
      { name: 'Заміна сайлентблоку (підрамника / балки)', price: 'Від 2400 грн' },
      { name: 'Заміна ШРУСу (гранати) / пильника', price: 'Від 1400 грн' },
      { name: 'Заміна хрестовини карданного валу', price: 'Від 2400 грн' },
    ]
  },
  {
    id: 8,
    title: 'ГРМ та сервісні ремені',
    icon: '/icon-timing.svg',
    items: [
      { name: 'Заміна ГРМ бензинового двигуна (8 - 20 клапанів)', price: 'Від 3500 грн' },
      { name: 'Заміна ГРМ дизельного двигуна (8 - 16 клапанів)', price: 'Від 4400 грн' },
      { name: 'Заміна ланцюга ГРМ (3-4 циліндри)', price: 'Від 9000 грн' },
      { name: 'Заміна ланцюга ГРМ зі зняттям двигуна', price: 'Від 19500 грн' },
      { name: 'Заміна сервісних ременів (ГУР, генератор, кондиціонер)', price: 'Від 990 грн' },
      { name: 'Заміна роликів (натяжний, обвідний)', price: 'Від 990 грн' },
    ]
  },
  {
    id: 9,
    title: 'Чищення форсунок (інжектора)',
    icon: '/icon-injector.svg',
    items: [
      { name: 'Чистка форсунок двигуна (4 - 8 шт)', price: 'Від 1700 грн' },
      { name: 'Чистка форсунок двигуна TSI / FSI', price: 'Від 1100 грн' },
      { name: 'Діагностика форсунок', price: 'Від 1500 грн' },
      { name: 'Монтаж / демонтаж колектора', price: 'Від 1600 грн' },
    ]
  },
  {
    id: 10,
    title: 'Гальмівна система',
    icon: '/icon-brake.svg',
    items: [
      { name: 'Заміна гальмівних дискових колодок (комплект)', price: 'Від 1300 грн' },
      { name: 'Заміна гальмівних дисків із колодками (пара)', price: 'Від 1800 грн' },
      { name: 'Заміна гальмівного супорта', price: 'Від 999 грн' },
      { name: 'Реставрація супорта / Розробка', price: 'Від 1500 грн' },
      { name: 'Заміна ремкомплекту супорта (1-4 поршня)', price: 'Від 1500 грн' },
      { name: 'Заміна гальмівної рідини', price: 'Від 1000 грн' },
    ]
  },
  {
    id: 11,
    title: 'Капітальний ремонт та ГБЦ',
    icon: '/icon-engine.svg',
    items: [
      { name: 'Капітальний ремонт двигунів (будь-які авто)', price: 'Від 1200$' },
      { name: 'Заміна прокладки ГБЦ (ременний привід, 4 цил.)', price: 'Від 9500 грн' },
      { name: 'Заміна прокладки ГБЦ (дизель / ланцюг)', price: 'Від 11900 грн' },
    ]
  },
];

const Services = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ціни на <span className={styles.highlight}>послуги</span></h2>
          <p className={styles.subtitle}>Прозорий прайс без прихованих платежів. Беремося навіть за ті випадки, від яких відмовились інші.</p>
        </div>

        <div className={styles.accordion}>
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`${styles.accordionItem} ${openId === service.id ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(service.id)}
              >
                <div className={styles.headerLeft}>
                  <div className={styles.iconBox}>
                    <div 
                      className={styles.iconMask} 
                      style={{ 
                        WebkitMaskImage: `url(${service.icon})`, 
                        maskImage: `url(${service.icon})` 
                      }} 
                    />
                  </div>
                  <span className={styles.serviceTitle}>{service.title}</span>
                </div>
                
                <div className={styles.toggleIcon}>
                  <div className={styles.horizontalBar}></div>
                  <div className={styles.verticalBar}></div>
                </div>
              </button>

              <div 
                className={styles.accordionContent}
                style={{ height: openId === service.id ? 'auto' : '0' }}
              >
                <div className={styles.contentInner}>
                  <ul className={styles.priceList}>
                    {service.items.map((item, index) => (
                      <li key={index} className={styles.priceItem}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.actionRow}>
                     <a href="tel:+380730905291" className={styles.bookBtn}>Записатися на сервіс</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;