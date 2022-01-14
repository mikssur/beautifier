module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rewiews', [
      {
        name: 'Федя', text: 'Отзыв 1', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Вася', text: 'Отзыв 2', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мустафа', text: 'Отзыв 3', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Masters');
  },
};
