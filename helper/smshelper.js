const Nexmo = require('nexmo')
const from = "Booking-App"

// Will Share these via mail || Check with HR for the below information
const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
})

/* Sends sms only to 918553543211
    Free tier limitation 
 List of numbers can be added */
function sendSms(to, text) {
    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                return true
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                return false
            }
        }
    })
}

module.exports = {
    sendSms
}