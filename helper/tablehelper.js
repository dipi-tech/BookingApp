var Reservation = require('../models/reservations');

async function saveReservations(resInfo) {
    let val = new Reservation;
    try {
        val = await Reservation.forge(resInfo).save();
        console.log(val.toJSON());
    } catch (e) {
        console.log(`Failed to save data: ${e}`);
    } finally {
        return val;
    }
}

module.exports = {
    saveReservations
}