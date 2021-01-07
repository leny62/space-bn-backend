import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import {template} from '../utils/emailVerificationtemplate';

async function sendVerificationEmail (firstname, email, token) {

    const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env.SENDGRID_API_KEY
        })
    );

    let mailOptions = {
        from: `Barefoot Nomad<${process.env.PROJECTEMAIL}`,
        to: email, 
        subject: "Verification Email",
        html: template(firstname, token)
    }
    
    await transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log('Error:', err);
        } else {
            console.log('Message sent!!!');
        }
    })
}

module.exports = sendVerificationEmail; 
