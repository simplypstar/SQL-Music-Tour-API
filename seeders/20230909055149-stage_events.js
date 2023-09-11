'use strict';

const db = require('../models')

///** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */

     await queryInterface.bulkInsert('stage_events', [
        {
          stage_id: 1,
          event_id: 1,
        }, {          
          stage_id: 3,
          event_id: 1,
        }, {          
          stage_id: 2,
          event_id: 2,
        }, {          
          stage_id: 1,
          event_id: 3,
        },
      ]);    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example: */

    await queryInterface.bulkDelete('stage_events', null, {});
    
  }
};
