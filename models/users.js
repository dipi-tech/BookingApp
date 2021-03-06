const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('bookshelf-case-converter-plugin');

const Users = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    orders() {
        return this.hasMany('Orders')
      },
    reservations() {
        return this.hasMany('Reservations')
      }
});

module.exports = Users;