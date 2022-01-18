module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'Женская стрижка', picture: 'images/strizhki.jpg', categoryId: '1', description: '', price: '999', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мужская стрижка', picture: '', categoryId: 1, description: '', price: '555', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Стрижка машинкой', picture: 'images/strizhka2', categoryId: '1', description: '', price: '333', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Детская стрижка', picture: 'images/detskaja.jpg', categoryId: '1', description: '', price: '444', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сложная стрижка', picture: '', categoryId: '1', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Окрашивание коротких волос', picture: '', categoryId: '2', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Окрашивание на длинные волосы', picture: '', categoryId: '2', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сложное окрашивание', picture: '', categoryId: '2', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Укладка на короткие волосы', picture: '', categoryId: '3', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Укладка на длинные волосы', picture: '', categoryId: '3', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сложная причёска', picture: '', categoryId: '4', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сложная причёска с использованием декоративных элементов', picture: '', categoryId: '4', description: '', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Маникюр без покрытия', picture: '', categoryId: '5', description: 'Основная идея маникюра без использования покрытия заключается в том, чтобы придать ногтям аккуратный вид и подать их красоту максимально в естественном виде. При этом можно изменить форму ногтевой пластины.', price: '1500', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Гель-лак', picture: '', categoryId: '5', description: 'Гель-лак укрепляет ногтевую пластину, что позволяет обладательницам тонких и ломких ногтей отрастить длину. Наши клиенты могут выбрать покрытие шеллаком или более стойкими и плотными гель-лаками.', price: '1000 - 3000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Креативный дизайн ногтей', picture: '', categoryId: '5', description: 'Цветовая гамма оформления креативного маникюра может быть самой неожиданной, в основном применимы яркие цвета, контрастные переходы, глянцевый блеск. На помощь приходит множество ярких лаков и гелей, декор стразами, блёстками и другими материалами.', price: '3000 - 6000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Окрашивание бровей', picture: '', categoryId: '6', description: 'Стойкое окрашивание бровей перманентной краской. Результат сохраняется до 1.5 месяцев.', price: '800', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Укладка бровей', picture: '', categoryId: '6', description: 'Придание модной формы бровям.', price: '500', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Окрашивание ресниц', picture: '', categoryId: '6', description: 'Стойкое окрашивание ресниц перманентной краской. Результат сохраняется до одного месяца.', price: '500', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Наращивание ресниц', picture: '', categoryId: '6', description: 'Чтобы процедура наращивания проходила безболезненно, гигиенично и правильно, наши мастера используют специальный косметический клей и экологически-чистые материалы. Наращивание происходит с использованием последних технологий, что позволяет выполнить работу в любом цвете и форме и объёме.', price: '1500 - 7000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Ламинирование ресниц', picture: '', categoryId: '6', description: 'Особенность этой процедуры - в эффекте распахнутого взгляда: ресницы получают новый выразительный изгиб, выглядят гуще и длиннее за счёт покрытия кератином вплоть до самого кончика. В составе средств - ухаживающие лечебные компоненты, комплексы витаминов, коллаген.', price: '500', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Креативный мэйкап глаз', picture: '', categoryId: '7', description: 'Палитра оттенков самая разнообразная, но без косметики с пометкой “waterproof” не обойтись. Для креативного макияжа используется не только грим, но и перья, живые цветы, наклейки и стразы. Бьюти-тренды: неон, яркий дрейпинг в японской технике (в области глаз с переходом на щеки), необычные стрелки, графика, глиттеры и блестки, яркие сочетания цветов.', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Креативный мэйкап губ', picture: '', categoryId: '7', description: 'Стили: сочный обЪём, очаровательное омбре, зацелованные уста, животный принт, блеск металла, блёстки', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Фейс арт', picture: '', categoryId: '7', description: 'Для создания рисунков на лице используют только специальные для этого краски. Краски для рисования на лице представляют собой безопасный продукт на основе воды, который очень легко смывается теплой водой. Даже сильно запачканные краской вещи очень легко отстирываются обычным порошком.', price: '1111', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Бодиарт', picture: 'images/bodiart.jpg', categoryId: '7', description: 'Для рисунков на теле используют самые разные материалы. Это аквагрим и простая гуашь, театральный грим или фломастер для татуажа, глиттер и специальный клей для удержания сверкающих частичек на коже. Рисунок держится несколько часов, а потом легко смывается мылом. Если вы хотите сделать боди-арт тела на более длительный период, то воспользуйтесь хной.', price: '3000 - 12000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Хеликс', picture: '', categoryId: '8', description: 'Выполняется в верхней части хряща уха. На первичное заживление нельзя ставить кольцо, на первые три месяца устанавливается прямой лабрет с накруткой. Безумно красиво смотрятся кластеры (вытянутые накрутки с тремя и более камнями), но, чтобы кластер органично вписался в форму вашего ушка, лучше сразу делать прокол с учётом разметки под такое украшение. Первичное заживление занимает 2-3 недели, после которого требуется даунсайз (замена первичного лабрета на более короткий).', price: '1000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Конч', picture: 'images/konch.jpg', categoryId: '8', description: 'Прокол внутреннего хряща уха. Если вам кажется, что украшение в подобном месте не будет видно, это заблуждение! Данный прокол привлекает внимание к своему обладателю, ведь при выборе правильного украшения он станет неотъемлемой частью вашего неповторимого образа. В отличие от хеликса, даунсайз является не обязательным, это делается по вашему желанию (если длинный лабрет мешает или кажется не эстетичным).', price: '1000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Дейс', picture: 'images/dejs.jpg', categoryId: '8', description: 'Это прокол в центральном хряще над ушной раковиной. К сожалению, кольцо сразу не устанавливается, первые три месяца придётся ходить с микробананом. Как правило, заживает без особых проблем, ведь зацепить его не так уж просто, правда на некоторое время придётся забыть про наушники.', price: '1000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Индастриал', picture: 'images/industrial.jpg', categoryId: '8', description: 'Достаточно необычный вид пирсинга, при котором украшение объединяет сразу два прокола. На первые полгода мы советуем ставить в индастриал материал птфе. Он мягче и создаёт меньшее давление на прокол, чем титановая штанга, ведь данный прокол капризный в период заживления, и вам придётся набраться терпения, если вы решили обзавестись подобным видом пирсинга.', price: '1200', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Язык', picture: 'images/jazik.jpg', categoryId: '8', description: 'Классический прокол языка (вертикальный) производится строго по центру, чтобы избежать задевания сосудов. Глубина прокола зависит от анатомии, мастер предложит вам возможные варианты при разметке. После прокола язык сильно опухает, поэтому сначала ставится длинная штанга, через 2-3 недели необходим даунсайз.', price: '800', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Пупок', picture: 'images/pypok.jpg', categoryId: '8', description: 'Популярность на прокол пупка не стихает уже много лет, но кроме классического верхнего прокола существует нижний и боковой. Вы можете выбрать один вариант прокола, или же совместить несколько.', price: '800', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Тоннели', picture: 'images/tonneli.jpg', categoryId: '8', description: 'Размер может колебаться в пределах 5 мм, 8 мм и 10 мм, или превышать 20 мм. Маленькие тоннели (до 5 мм) достаточно легко и быстро надеваются, также беспроблемно снимаются, а мочка самостоятельно стягивается. Большие тоннели требуют серьезной работы по растягиванию прокола, поэтому подходят тем людям, кто решил их носить не менее нескольких лет. После них мочку вероятнее всего придется зашивать, что бы избавиться от обвисания.', price: '2000 - 8000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Минимальная стоимость', picture: '', categoryId: '9', description: '', price: '3000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сеанс', picture: '', categoryId: '9', description: '3 - 4 часа', price: '5000', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'День', picture: '', categoryId: '9', description: '8 - 12 часов', price: 'от 10000', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services');
  },
};
