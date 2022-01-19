import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {Link} from 'react-router-dom';
import './Contact.css';

function Contact(props) {
  const coordinates = [59.927310, 30.350840];  
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-row-2">
          <YMaps>
            <Map defaultState={{ center: [59.927310, 30.350840], zoom: 15 }} className="footer-map">
              <Placemark geometry={coordinates} />
            </Map>
          </YMaps>
          <nav>
            <h3>Меню</h3>
            <ul className="footer-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/reviews">Review</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/reservation">Записаться</Link>
              </li>
            </ul>
          </nav>
          <div className="contacts">
            <h3>Контакты</h3>
            <ul>
              <li><strong>Адрес</strong>: Кузнецовский переулок 5/2</li>
              <li><strong>Телефон</strong>: +7-XXX-XXX-XXX</li>
              <li><strong>Почта</strong>: beautifier@gmail.com</li>
          </ul>
          </div>
        </div>
        <div className="footer-content-row-3">
          <h2 className="footer-logo">BEAUTIFIER</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
