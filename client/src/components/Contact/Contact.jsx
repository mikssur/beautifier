import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function Contact(props) {
  const coordinates = [59.927310, 30.350840];

  return (
    <>
      <ul>
        <li>АДРЕС: КУЗНЕЦОВСКИЙ ПЕРЕУЛОК 5/2</li>
        <li>ТЕЛЕФОН: +7-XXX-XXX-XXX</li>
        <li>GMAIL: beautifier@gmail.com</li>
      </ul>
      <YMaps>
        <Map defaultState={{ center: [59.927310, 30.350840], zoom: 15 }} style={{ width: '350px', height: '350px' }}>
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>
    </>
  );
}

export default Contact;
