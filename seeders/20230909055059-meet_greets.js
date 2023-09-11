'use strict';

 const db = require('../models')

//** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     **/
     
     await queryInterface.bulkInsert('meet_greets', [
        {
          event_id: 1,
          band_id: 3,
          meet_start_time: '2022-05-27 17:00:00',
          meet_end_time: '2022-05-27 17:30:00',
        }, {
          event_id: 1,
          band_id: 4,
          meet_start_time: '2022-05-27 21:00:00',
          meet_end_time: '2022-05-27 21:30:00',
        }, {
          event_id: 2,
          band_id: 2,
          meet_start_time: '2022-07-03 17:00:00',
          meet_end_time: '2022-07-03 17:30:00',
        }, {
          event_id: 3,
          band_id: 1,
          meet_start_time: '2022-07-04 20:00:00',
          meet_end_time: '2022-07-04 20:30:00',
        },
      ]);    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     **/
     
    await queryInterface.bulkDelete('meet_greets', null, {});
     
  }
};
