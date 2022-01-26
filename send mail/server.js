require('dotenv').config()

const nodemailer = require('nodemailer')

let tranporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'progetto.git@gmail.com',
    pass: 'Progettogit123',
  },
})

let mailOptions = {
  from: 'progetto.git@gmail.com',
  to: 'baldifilip@gmail.com',
  subject: 'Progetto Git',
  text: 'https://honeysuckle-booklet-3ef.notion.site/Git-GitHub-dfd0bb86004447ef832102d7565bc43e',
}

tranporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('errore !!!!!!!' + err)
  } else {
    console.log('email inviata')
  }
})
