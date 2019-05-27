const mailer = require('nodemailer');
const mailDebug = require('debug')('app:mail');

// configure the nodemailer
const mailServer = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'admin@Admin.com',//PUT EMAIL  
        pass: 'ADMIN'//
    }
});

module.exports = function (to, subject, body) {
    mailDebug('Debugging mailer');
    const mailOptions = {
        from: 'admin@Admin.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: `<p>${body}</p>`// plain text body
    };
    mailServer.sendMail(mailOptions, (err, info) => {
        if (err) mailDebug("The mail send was failed:", err);
        else mailDebug("Mail successful sent to", info.accepted);
    });
};
