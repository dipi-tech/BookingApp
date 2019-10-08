const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'admin',
        database: 'bookingapp',
        charset: 'utf8'
    }
});

module.exports.knex = knex;