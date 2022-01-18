module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('masterServices', [
      {
        masterId: '1', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '1', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '1', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '7', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '8', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '9', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '12', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('masterServices');
  },
};
