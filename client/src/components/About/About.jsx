import React from 'react';

import './About.css';

function About() {
  return (
    <>
      <div className="about-row-1">
        <h1 className="about-header-1">О КОМПАНИИ BEAUTIFIER</h1>
        <p className="about-desc-1">МЫ - ГАРАНТИЯ ВАШЕЙ НЕСТАНДАРТНОСТИ И КРАСОТЫ!</p>
        <img src="https://www.dizainvfoto.ru/wp-content/uploads/2018/02/salon-krasoty-parikmaxerskaya-svetlyj-dizajn.jpg" />
      </div>
      <div className="about-row-2">
        <h1 className="about-header-2">ПОДЧЕРКИВАЕМ ВАШУ ИНДИВИДУАЛЬНОСТЬ</h1>
        <p className="about-desc-2">МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ НОГТЕВОГО СЕРВИСА А ТАКЖЕ КОСМЕТИЧЕСКИЕ ПРОЦЕДУРЫ.</p>
        <img src="https://www.dizainvfoto.ru/wp-content/uploads/2018/02/salon-krasoty-parikmaxerskaya-svetlyj-dizajn.jpg" />
      </div>
      <div className="about-row-3">
        <h1 className="about-header-3">НАША ФИЛОСОФИЯ</h1>
        <div className="about-text">
          <p className="about-desc-3">ЦЕЛЬ BEAUTIFIER - РАСКРЫВАТЬ НЕСТАНДАРТНОСТЬ И ИНДИВИДУАЛЬНОСТЬ ВНЕШНЕГО ВИДА КАЖДОГО ПОСЕТИТЕЛЯ.</p>
          <p className="about-desc-3">ЖЕЛАНИЯ КАЖДОГО ГОСТЯ МЫ ВОПЛОЩАЕМ В ВЫСОКОМ КЛАССЕ ИСПОЛНЕНИЯ.</p>
          <p className="about-desc-3">НАШИ КВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ ОКАЗЫВАЮТ УСЛУГИ ВЫСОКОГО КАЧЕСТВА С ПРИМЕНЕНИЕМ ПРОФЕССИОНАЛЬНОЙ КОСМЕТИКИ ЭЛИТНЫХ ПРОИЗВОДИТЕЛЕЙ.</p>
          <p className="about-desc-3">МЫ ОБРАЩАЕМ ВНИМАНИЕ НА ДЕТАЛИ И ПОЛНОСТЬЮ ОТВЕЧАЕМ ЗА РЕЗУЛЬТАТ.</p>
        </div>
      </div>
    </>
  );
}

export default About;
