import React from 'react';
import Categories from '../Categories/Categories';
import Interior from '../Interior/Interior';
import PromoPhotos from '../PromoPhotos/PromoPhotos';

function Home(props) {
  return (
    <div>
      <img src="#" />
      <p>ДЛЯ ТЕХ, КТО ИЗ ЛУЧШЕГО ВЫБИРАЕТ ИСКЛЮЧИТЕЛЬНОЕ!</p>
      <p>BEAUTIFIER АДРЕС: КУЗНЕЦОВЫЙ ПЕРЕУЛОК 5/2</p>
      <PromoPhotos />
      <Interior />
      <Categories />
    </div>
  );
}

export default Home;
