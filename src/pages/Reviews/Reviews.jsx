import React from 'react';
import styles from './Reviews.module.css';

// 📝 ТВОЇ 100% РЕАЛЬНІ ВІДГУКИ З GOOGLE MAPS
const reviewsData = [
  {
    id: 1,
    name: 'Лиза',
    date: '10 місяців тому',
    text: 'Зверталась до цього сервісу по ремонту двигуна, і залишилась дуже задоволена! Майстер професійно провів діагностику, швидко виявив проблему та якісно все полагодив. Роботу виконав вчасно, без зайвих витрат і «сюрпризів». Окремо хочу відзначити ввічливе ставлення та зрозумілі пояснення - усе чітко і без технічного жаргону. Авто працює, як нове, Рекомендую!!!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Максим Максименко',
    date: '5 місяців тому',
    text: 'Під час поїздки з\'явився нехарактерний шум з-під капота. Зателефонував до майстра і дізнався чи можу під\'їхати, тому що був вихідний день та після 20.00. Просто оглянувши та проїхавшись майстер дуже швидко знайшов можливу поломку (лопнув патрубок). Щиро рекомендую цю майстерню, обслуговування на вищому рівні :)',
    rating: 5,
  },
  {
    id: 3,
    name: 'Рома Алексеев',
    date: '10 місяців тому',
    text: 'Проваливалось сцепление, приехал на сервис, сказали нужно менять... Проблема осталась. Решил обратиться на это СТО, мастер провел диагностику, обнаружил повреждения цилиндра сцепления. Все заменили быстро и качественно. Самое приятное в этом всем, что мастер работал в воскресенье 😉 Спасибо большое мастеру',
    rating: 5,
  }
];

const Reviews = () => {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        
        {/* Шапка з рейтингом Google */}
        <div className={styles.header}>
          <div className={styles.googleBadge}>
            <span className={styles.gLogo}>G</span>
            <span className={styles.badgeText}>Рейтинг на Google Картах</span>
          </div>
          <h2 className={styles.title}>
            ЩО КАЖУТЬ <span className={styles.highlight}>КЛІЄНТИ</span>
          </h2>
          
          <div className={styles.ratingOverview}>
            <span className={styles.bigScore}>5.0</span>
            <div className={styles.stars}>
              ⭐⭐⭐⭐⭐
            </div>
            <span className={styles.reviewCount}>На основі 150+ відгуків</span>
          </div>
        </div>

        {/* Картки відгуків */}
        <div className={styles.reviewsGrid}>
          {reviewsData.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.cardHeader}>
                {/* Аватарка генерується з першої літери імені */}
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{review.name}</h4>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
              <div className={styles.cardStars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Кнопки дії */}
        <div className={styles.actionRow}>
          {/* 🔥 ВСТАВ СВІЙ ЛІНК НА ВІДГУКИ ЗАМІСТЬ ТЕКСТУ НИЖЧЕ 🔥 */}
          <a 
            href="ТУТ_ТВОЄ_ПОСИЛАННЯ_НА_GOOGLE_MAPS" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.readMoreBtn}
          >
            Читати всі відгуки в Google
          </a>
          
          {/* 🔥 ВСТАВ ЛІНК ДЛЯ НАПИСАННЯ НОВОГО ВІДГУКУ 🔥 */}
          <a 
            href="ТУТ_ТВОЄ_ПОСИЛАННЯ_НА_GOOGLE_MAPS" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.leaveReviewBtn}
          >
            Залишити свій відгук
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;