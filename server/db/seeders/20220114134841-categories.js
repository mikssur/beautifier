module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Категория 1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Категория 2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Категория 3', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories');
  },
};
