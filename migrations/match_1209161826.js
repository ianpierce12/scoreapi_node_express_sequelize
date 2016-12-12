/**
 * Created by ianpierce on 12/9/16.
 */
"use strict";

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface
            .createTable('Matches', {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                score: {
                    type: Sequelize.TEXT,
                }
            })
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface
            .dropTable('Matches');
    }
}