const express = require("express");
const app = express();

const nodemailer = require('nodemailer');


app.post("/sendEmail", (req, res) => {
    const parameters = req.body;
    console.log('parameters', parameters);
});

const transporter = nodemailer.createTransport({
    auth: {
        user: 'suportepentgm@gmail.com',
        pass: 'suportetgm99822'
    },
    
})



const sendEmailFunction = ( subject, text, players) => {
    const mailOptions = {
        from: 'suportepentgm@gmail.com',
        to: players,
        subject,
        text
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log('erro!', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Servidor iniciado na porta ${PORT}`));