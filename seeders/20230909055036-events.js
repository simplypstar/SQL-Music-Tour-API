'use strict';

const db = require('../models')

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */

     await queryInterface.bulkInsert('events', [
        {
          name: 'Memorial Day Weekend Celebration',
          date: '2022-05-27 17:00:00',
          start_time: '2022-05-27 18:00:00',
          end_time: '2022-07-04 01:00:00',
        }, {
          name: 'July 4th Festival - Day 1',
          date: '2022-07-03 16:00:00',
          start_time: '2022-07-03 18:00:00',
          end_time: '2022-07-03 22:00:00',
        },
        {
          name: 'July 4th Festival - Day 2',
          date: '2022-07-04 19:00:00',
          start_time: '2022-07-04 21:00:00',
          end_time: '2022-07-04 02:00:00',
        },         
     ]);  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('events', null, {});
     
  }
};
