const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('bookshelf-case-converter-plugin');

const Reservations = bookshelf.Model.extend({
    tableName: 'reservations',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    user(){
        return this.belongsTo('Users')
    }
});

module.exports = Reservations;