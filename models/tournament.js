/**
 * Created by ianpierce on 12/11/16.
 */
'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Tournament = sequelize.define('Tournament', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.TEXT
        }
    }, {
        classMethods: {
            associate: function(models) {
                Tournament.hasMany(models.Match, {
                    onDelete: 'cascade'
                });
            }
        }
    });
    return Tournament;
}