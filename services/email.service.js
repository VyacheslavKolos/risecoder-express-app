const mailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD } = require('../configs/config');
const templatesInfo = require('../templates/index');

// https://myaccount.google.com/u/3/apppasswords
async function sendMail(receiverEmail, emailType, context = {}) {
  const templateInfo = templatesInfo[emailType];
  if (!templateInfo) {
    throw new Error('Wrong template info');
  }

  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: NO_REPLY_EMAIL,
      pass: NO_REPLY_EMAIL_PASSWORD,
    },
  });

  // https://www.concentrationcode.com/handlebars-email/
  // https://handlebarsjs.com/guide/#partials
  transporter.use(
    'compile',
    hbs({
      viewEngine: {
        extname: '.hbs',
        layoutsDir: 'templates/',
        defaultLayout: false,
        partialsDir: 'templates/',
      },
      viewPath: 'templates/',
      extName: '.hbs',
    }),
  );

  // https://community.nodemailer.com/
  // https://www.npmjs.com/package/nodemailer
  await transporter.sendMail({
    from: 'kolosOk no_reply',
    to: receiverEmail,
    subject: templateInfo.subject,
    template: templateInfo.templateName,
    context,
  });
}

async function sendEmailViaSendGrid() {
  const sgMail = require('@sendgrid/mail');

  sgMail.setApiKey('SG.MIa****');

  const msg = {
    to: 'test10@gmail.com', // Change to your recipient
    from: 'test@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = {
  sendMail,
  sendEmailViaSendGrid,
};
