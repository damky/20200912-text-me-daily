const nodemailer = require('nodemailer');
async function email(mailInfo) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587, // true for 465, false for other ports
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(mailInfo ? mailInfo : {
    from: '"Fred Foo" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of recievers
    subject: "hello", // subject line
    text: "hello world", // plain text body
    html: "<b>Hello World</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("preview url: %s", nodemailer.getTestMessageUrl(info)); // preview only available when sending through an ethereal account

}

module.exports = email;