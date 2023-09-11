'use strict';

const db = require('../models')

///** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */

     await queryInterface.bulkInsert('stages', [
     {
       stage_name: 'Center-Main',
     },
     {
      stage_name: 'Center-Left',
      },
      {
        stage_name: 'Center-Right',
      },         
    ]);  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     **/
     
    await queryInterface.bulkDelete('stages', null, {});     
  }
};
