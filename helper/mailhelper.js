const nodemailer = require('nodemailer');

// Configuration can be changed to any email provider
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'marina.marquardt@ethereal.email',
        pass: '6BbEYJAjhJmZTEZvXp'
    }
});

// Use the preview url in console to see the mail sent
async function sendMail(toAddress, subject, text) {
    // Message object
    let message = {
        from: 'marina.marquardt@ethereal.email',
        to: toAddress,
        subject: subject,
        text: text,
        html: '<p>Insert Html Content here</p>'
    };

    return transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return false
        } else {
            console.log('Message sent: %s', info.messageId);

            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return true
        }
    });
}

module.exports = {
    sendMail
}
