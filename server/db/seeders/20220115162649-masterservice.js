module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('masterServices', [
      {
        masterId: '1', serviceId: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '1', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('masterServices');
  },
};
