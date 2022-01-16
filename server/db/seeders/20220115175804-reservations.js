module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', [
      {
        clientName: 'Ксения', clientNumber: 83219008760, masterId: 1, serviceId: 1, time: '13,15', date: new Date(), createdAt: new Date(), updatedAt: new Date(),
      },
      {
        clientName: 'Артем', clientNumber: 89216660606, masterId: 3, serviceId: 2, time: '15,15', date: new Date(), createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations');
  },
};
