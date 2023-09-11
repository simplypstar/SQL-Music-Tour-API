'use strict';

const db = require('../models')

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */

    await queryInterface.bulkInsert('bands', [
      {
        name: 'Prince',
        genre: 'R&B',
        available_start_time: '2022-07-04 21:00:00',
        end_time: '2022-07-04 00:00:00',
     }, {
        name: 'Tina Turner',
        genre: 'Rock',
        available_start_time: '2022-07-03 18:00:00',
        end_time: '2022-07-03 20:00:00',
     }, {
        name: 'The Temptations',
        genre: 'R&B',
        available_start_time: '2023-05-27 18:00:00',
        end_time: '2022-05-27 20:00:00',      
     }, {
        name: 'Patti LaBelle',
        genre: 'R&B',
        available_start_time: '2023-05-27 22:00:00',
        end_time: '2022-05-27 00:00:00',      
     }  ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/

      await queryInterface.bulkDelete('bands', null, {});     
  }
};
