module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'Услуга 1', categoryId: '1', price: '777', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Услуга 2', categoryId: '2', price: '555', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Услуга 3', categoryId: '3', price: '999', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services');
  },
};
