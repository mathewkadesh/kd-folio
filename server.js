const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config(); 

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

app.post('/send-email', (req, res) => {
  const { senderEmail, subject, text } = req.body;

  const mailOptions = {
    from: senderEmail,
    to: 'kadeshmathew@gmail.com',
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
