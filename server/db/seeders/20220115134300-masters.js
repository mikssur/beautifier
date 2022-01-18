module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Masters', [
      {
        name: 'Оксана', category: 'ногтевой сервис', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Алиса', category: 'ногтевой сервис', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Анатолий', category: 'ногтевой сервис', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Владимир', category: 'стрижки, окрашивание, сложные причёски, укладка волос', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мария', category: 'стрижки, окрашивание, сложные причёски, укладка волос', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Алекс', category: 'стрижки, сложные причёски, укладка волос', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Арина', category: 'окрашивание, сложные причёски, укладка волос', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Елена', category: 'макияж', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Элеонора', category: 'макияж', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Николя', category: 'макияж', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Анастасия', category: 'брови и ресницы', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Роман', category: 'пирсинг, тату', picture: '', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Masters');
  },
};
