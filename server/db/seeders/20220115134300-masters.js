module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Masters', [
      {
        name: 'Мастер 1', category: 'Категория 1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мастер 2', category: 'Категория 2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мастер 3', category: 'Категория 3', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Masters');
  },
};
