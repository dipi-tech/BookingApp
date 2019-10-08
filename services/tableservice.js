var tableHelper = require('../helper/tablehelper');
var userHelper = require('../helper/userhelper');
var smsHelper = require('../helper/smshelper');
var mailHelper = require('../helper/mailhelper');

async function confirmReservation(resInfo) {
    if (checkForTableAvailability(resInfo)) {
        resInfo['confirmationStatus'] = true
        resInfo['waitlistStatus'] = false
        return confirmationUtils(resInfo)
    } else {
        resInfo['confirmationStatus'] = false
        resInfo['waitlistStatus'] = true
        return confirmationUtils(resInfo)
    }
}

function checkForTableAvailability(resInfo) {
    /* As table and hotel details are not available,
    this fuctions is to check if a particular table is available,
    based on setting count among other things. 

    If a particular table is not available, the request will be pushed to wait-list and user will be informed the same

    By default: it will return true
    */
    return true
}

async function confirmationUtils(resInfo) {
    var reservation = await tableHelper.saveReservations(resInfo)
    var userDetails = await userHelper.fetchUserBasedOnId(reservation.get('userId'))
    var isSuccess = sendNotifications(userDetails, reservation.get('confirmationStatus'))
    if (isSuccess) {
        return reservation
    } else {
        return null
    }
}

async function sendNotifications(userDetails, confirmationStatus) {
    try {
        if (confirmationStatus) {
            isSmsSuccess = await smsHelper.sendSms(userDetails.get('mobile'), "Table has been successfully booked");
            isMailSuccess = await mailHelper.sendMail(userDetails.get('email'), "Booking Confirmation", "Table has been successfully booked")
        } else {
            isSmsSuccess = await smsHelper.sendSms(userDetails.get('mobile'), "Table is in waitlist, Will let you know if any change");
            isMailSuccess = await mailHelper.sendMail(userDetails.get('email'), "Booking Confirmation", "Table is in waitlist, Will let you know if any change")
        }
        return true
    } catch (e) {
        return false
    }
}


module.exports = {
    confirmReservation
}