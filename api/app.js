require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 3000;


console.log("Starting the server...");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Twilio and SendGrid Configuration
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route to handle appointment submissions
app.post("/send-email", async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
        // Send WhatsApp Message
        await twilioClient.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: `whatsapp:${phone}`,
            body: `Hello ${name},\n\nThank you for booking an appointment!\n\nMessage: ${message}`,
        });

        // Send Email Notification
        await sgMail.send({
            to: email,
            from: process.env.SENDER_EMAIL,
            subject: "Appointment Confirmation",
            html: `<h1>Appointment Confirmation</h1>
                   <p>Hi ${name},</p>
                   <p>Thank you for booking an appointment. Details:</p>
                   <p>${message}</p>`,
        });

        res.status(200).json({ success: true, message: "Notifications sent successfully!" });
    } catch (error) {
        console.error("Error sending notifications:", error);
        res.status(500).json({ success: false, message: "Failed to send notifications." });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
