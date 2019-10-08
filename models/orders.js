const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('bookshelf-case-converter-plugin');

const Orders = bookshelf.Model.extend({
    tableName: 'orders',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    users() {
        return this.belongsTo('Users')
    }
});

module.exports = Orders;