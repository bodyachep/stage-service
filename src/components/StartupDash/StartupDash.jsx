import React, { useEffect, useRef, useState } from 'react';
import styles from './StartupDash.module.css';

const errorIconsSequence = [
    { id: 'esp', src: '/car-esp.svg', color: 'amber' },
    { id: 'abs', src: '/car-brake-abs.svg', color: 'amber' },
    { id: 'battery', src: '/car-battery.svg', color: 'red' }, 
    { id: 'parking', src: '/car-brake-parking.svg', color: 'red' }, 
    { id: 'oil', src: '/oil-level.svg', color: 'red' }, 
    { id: 'tire', src: '/car-tire-alert.svg', color: 'amber' },
    { id: 'engine', src: '/engine-outline.svg', color: 'amber' },
];

const StartupDash = () => {
  const [tachoAngle, setTachoAngle] = useState(-135); 
  const [speedAngle, setSpeedAngle] = useState(-135);
  const [tachoSpeed, setTachoSpeed] = useState('0s');
  const [speedTransition, setSpeedTransition] = useState('0s');

  const [turboAngle, setTurboAngle] = useState(-135); 
  const [oilAngle, setOilAngle] = useState(-135);   
  const [turboTransition, setTurboTransition] = useState('0s');
  const [oilTransition, setOilTransition] = useState('0s');
  const [isOilOverheat, setIsOilOverheat] = useState(false); 
  
  const [activeErrors, setActiveErrors] = useState([]);
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasTriggered) {
        setHasTriggered(true);
        triggerStartupSequence();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  const triggerStartupSequence = () => {
    const sweepSpeed = '1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    const dropSpeed = '1s cubic-bezier(0.25, 1, 0.5, 1)';

    // 1. ТЕСТ СТРІЛОК (Запалювання)
    setTachoSpeed(sweepSpeed); setSpeedTransition(sweepSpeed);
    setTurboTransition(sweepSpeed); setOilTransition(sweepSpeed);
    
    setTachoAngle(135); setSpeedAngle(135);
    setTurboAngle(135); setOilAngle(135); 

    // 2. СТРІЛКИ ПАДАЮТЬ В РОБОЧЕ ПОЛОЖЕННЯ
    setTimeout(() => {
      setTachoSpeed(dropSpeed); setSpeedTransition(dropSpeed);
      setTurboTransition(dropSpeed); setOilTransition(dropSpeed);

      setSpeedAngle(-135); 
      setTachoAngle(-84);  
      setTurboAngle(-100); 
      setOilAngle(-20);    
    }, 1300);

    // 3. ГАЗ В ПІДЛОГУ + ПОЧАТОК ПЕРЕГРІВУ
    const gasPressTime = 2800;
    setTimeout(() => {
      setTachoSpeed('0.4s ease-in');
      setTachoAngle(135); 
      setTurboTransition('0.3s ease-out');
      setTurboAngle(125); 
      
      setOilTransition('2.5s ease-in'); 
      setOilAngle(135); 
    }, gasPressTime);

    // 4. "ОТСЄЧКА" (Реалістичний лімітер)
    let limiterInterval;
    setTimeout(() => {
      setIsOilOverheat(true);
      limiterInterval = setInterval(() => {
        setTachoSpeed('0.06s ease-out');
        setTurboTransition('0.06s ease-out');
        setTachoAngle(prev => prev === 135 ? 128 : 135); 
        setTurboAngle(prev => prev === 125 ? 120 : 125);
      }, 90);
    }, gasPressTime + 400);

    // 5. ВІДПУСКАЄМО ГАЗ
    const releaseGasTime = gasPressTime + 2000;
    setTimeout(() => {
      clearInterval(limiterInterval);
      setTachoSpeed('1s cubic-bezier(0.25, 1, 0.5, 1)');
      setTurboTransition('1s cubic-bezier(0.25, 1, 0.5, 1)');
      setTachoAngle(-108); 
      setTurboAngle(-110); 
    }, releaseGasTime);

    // 6. ПОМИЛКИ ТА РЕАЛІСТИЧНЕ ТРОЇННЯ (Синхронно тахометр + турбіна)
    setTimeout(() => {
      errorIconsSequence.forEach((error, index) => {
        setTimeout(() => { setActiveErrors(prev => [...prev, error.id]); }, index * 600); 
      });

      setInterval(() => {
        setTachoSpeed('0.3s ease-in-out');
        setTachoAngle(-120); 
        setTurboTransition('0.3s ease-in-out'); 
        setTurboAngle(-125); 

        setTimeout(() => {
          setTachoSpeed('0.15s ease-out');
          setTachoAngle(-95); 
          setTurboTransition('0.15s ease-out'); 
          setTurboAngle(-100);
        }, 300);
      }, 1500);
    }, releaseGasTime + 800); 
  };

  const renderTicks = (maxItems, startRotation = -135) => {
    const ticks = Array.from({ length: maxItems + 1 }, (_, i) => i);
    return ticks.map(tick => {
      const angle = startRotation + (tick * (270 / maxItems));
      const isRedline = maxItems === 8 && tick >= 7; 
      const text = maxItems === 8 ? tick : tick * 30; 

      return (
        <div key={tick} className={styles.tickWrapper} style={{ transform: `rotate(${angle}deg)` }}>
          <div className={`${styles.tickText} ${isRedline ? styles.redlineText : ''}`} style={{ transform: `rotate(${-angle}deg)` }}>
            {text}
          </div>
        </div>
      );
    });
  };

  const renderSmallTicks = (type) => {
    const isTurbo = type === 'turbo';
    const ticksCount = isTurbo ? 6 : 4; 
    const startAngle = -135;
    const ticks = Array.from({ length: ticksCount + 1 }, (_, i) => i);
    
    return ticks.map(tick => {
      const angle = startAngle + (tick * (270 / ticksCount));
      const isRedline = tick >= ticksCount - 1; 
      
      let text = '';
      if (isTurbo) {
          if (tick === 0) text = '-1';
          if (tick === 2) text = '0';
          if (tick === 4) text = '1';
          if (tick === 6) text = '2';
      } else {
          if (tick === 0) text = '50';
          if (tick === 2) text = '100';
          if (tick === 4) text = '150';
      }

      return (
        <div key={tick} className={styles.smallTickWrapper} style={{ transform: `rotate(${angle}deg)` }}>
          <div className={`${styles.smallTickLine} ${text ? styles.majorSmallTick : ''}`}></div>
          {text && (
            <div className={`${styles.smallTickText} ${isRedline ? styles.redlineText : ''}`} style={{ transform: `rotate(${-angle}deg)` }}>
              {text}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.dashboardHousing}>
        <div className={styles.dashContainer}>
          
          {/* ТУРБІНА */}
          <div className={`${styles.gauge} ${styles.smallGauge}`}>
            <img src="/white-logo.jpg" alt="Logo" className={styles.gaugeLogoSmall} />
            <div className={styles.gaugeLabelSmall}>TURBO</div>
            <div className={styles.smallTicksContainer}>{renderSmallTicks('turbo')}</div>
            <div className={styles.needleWrapperSmall} style={{ transform: `rotate(${turboAngle}deg)`, transition: `transform ${turboTransition}` }}>
              <div className={styles.needleSmall}></div>
            </div>
            <div className={styles.needleCenterSmall}></div>
          </div>

          {/* СПІДОМЕТР */}
          <div className={styles.gauge}>
            <div className={styles.gaugeLogo} style={{ maskImage: 'url(/white-logo.jpg)', WebkitMaskImage: 'url(/white-logo.jpg)' }}></div>
            <div className={styles.gaugeLabel}>km/h</div>
            <div className={styles.ticksContainer}>{renderTicks(10)}</div>
            <div className={styles.needleWrapper} style={{ transform: `rotate(${speedAngle}deg)`, transition: `transform ${speedTransition}` }}>
              <div className={styles.needle}></div>
            </div>
            <div className={styles.needleCenter}></div>
          </div>

          {/* ПАНЕЛЬ ПОМИЛОК */}
          <div className={styles.centerPanel}>
             <div className={styles.errorGrid}>
                {errorIconsSequence.map((error) => (
                    <div 
                        key={error.id} 
                        className={`${styles.errorLight} ${activeErrors.includes(error.id) ? styles.active : ''} ${styles[error.color]}`}
                    >
                        <div 
                            className={styles.iconMask}
                            style={{ maskImage: `url(${error.src})`, WebkitMaskImage: `url(${error.src})` }}
                        ></div>
                    </div>
                ))}
             </div>
          </div>

          {/* ТАХОМЕТР */}
          <div className={styles.gauge}>
            <div className={styles.gaugeLogo} style={{ maskImage: 'url(/white-logo.jpg)', WebkitMaskImage: 'url(/white-logo.jpg)' }}></div>
            <div className={styles.gaugeLabel}>RPM x1000</div>
            <div className={styles.redlineArc}></div>
            <div className={styles.ticksContainer}>{renderTicks(8)}</div>
            <div className={styles.needleWrapper} style={{ transform: `rotate(${tachoAngle}deg)`, transition: `transform ${tachoSpeed}` }}>
              <div className={styles.needle}></div>
            </div>
            <div className={styles.needleCenter}></div>
          </div>

           {/* МАСЛО */}
           <div className={`${styles.gauge} ${styles.smallGauge} ${isOilOverheat ? styles.blinkingAlert : ''}`}>
            <img src="/white-logo.jpg" alt="Logo" className={styles.gaugeLogoSmall} />
            <div className={styles.gaugeLabelSmall}>OIL TEMP</div>
            <div className={styles.smallTicksContainer}>{renderSmallTicks('oil')}</div>
            <div className={styles.needleWrapperSmall} style={{ transform: `rotate(${oilAngle}deg)`, transition: `transform ${oilTransition}` }}>
              <div className={styles.needleSmall}></div>
            </div>
            <div className={styles.needleCenterSmall}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartupDash;