// // emailUtil.js

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // ✅ Step 1: Configure the transporter (SMTP settings)
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST, // Example: "smtp.gmail.com"
//   port: process.env.EMAIL_PORT, // Example: 587 (TLS)
//   secure: false, // Use TLS instead of SSL
//   auth: {
//     user: process.env.EMAIL_USER, // Your email address from env
//     pass: process.env.EMAIL_PASSWORD, // App password or email password
//   },
// });

// /**
//  * ✅ Send Welcome Email to New Users
//  * 
//  * @param {string} name - The name of the user
//  * @param {string} toEmail - The recipient's email address
//  * 
//  * Features:
//  * - Personalized welcome message with the user's name
//  * - HTML styled message with logo, call-to-action, and contact info
//  * - Automatically sends on successful registration
//  */
// exports.sendWelcomeEmail = async (name, toEmail) => {
//   const mailOptions = {
//     from: `"Coffee Cafe" <${process.env.EMAIL_USER}>`,
//     to: toEmail,
//     subject: "🎉 Welcome to Coffee Cafe!",
//     html: `
//       <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
//         <h2 style="color: #8B4513;">Hello ${name},</h2>
//         <p>☕ Thank you for signing up at <strong>Coffee Cafe</strong> – your favorite destination for rich coffee flavors and cozy moments!</p>
        
//         <hr style="border: none; border-top: 1px solid #ddd;" />

//         <h3>🎁 Here's what you can explore:</h3>
//         <ul>
//           <li>✔️ Explore our latest seasonal brews and limited-time offers</li>
//           <li>✔️ Get personalized recommendations based on your preferences</li>
//           <li>✔️ Enjoy loyalty rewards and member-only discounts</li>
//           <li>✔️ Book tables, events, or online orders right from your dashboard</li>
//         </ul>

//         <p>We're thrilled to have you with us. Let's make every sip memorable! ☕</p>

//         <a href="http://localhost:3000/login" style="display: inline-block; padding: 10px 20px; margin-top: 15px; background-color: #8B4513; color: #fff; text-decoration: none; border-radius: 4px;">
//           Go to Dashboard
//         </a>

//         <p style="margin-top: 30px;">Need help? Just reply to this email or contact us at <a href="mailto:support@your-coffee-cafe.com">support@your-coffee-cafe.com</a>.</p>

//         <hr style="border: none; border-top: 1px solid #ddd;" />
//         <p style="font-size: 12px; color: #888;">© 2025 Coffee Cafe. All rights reserved.</p>
//       </div>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("✅ Welcome email sent to:", toEmail);
//   } catch (err) {
//     console.error("❌ Error sending welcome email:", err);
//   }
// };

// emailUtil.js

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendWelcomeEmail = async (name, toEmail) => {
  const mailOptions = {
    from: `"Coffee Cafe ☕" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "🎉 Welcome to Coffee Cafe!",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
        <!-- ☕ Animated GIF -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://tenor.com/view/coffee-drink-cafe-morning-kopi-gif-26447308.gif" alt="Welcome Coffee" style="width: 100%; max-width: 300px; border-radius: 8px;" />
        </div>

        <h2 style="color: #8B4513;">Hello ${name},</h2>
        <p>☕ Thank you for signing up at <strong>Coffee Cafe</strong> – your favorite destination for rich coffee flavors and cozy moments!</p>
        
        <hr style="border: none; border-top: 1px solid #ddd;" />

        <h3>🎁 Here's what you can explore:</h3>
        <ul>
          <li>✔️ Explore our latest seasonal brews and limited-time offers</li>
          <li>✔️ Get personalized recommendations based on your preferences</li>
          <li>✔️ Enjoy loyalty rewards and member-only discounts</li>
          <li>✔️ Book tables, events, or online orders right from your dashboard</li>
        </ul>

        <p>We're thrilled to have you with us. Let's make every sip memorable! ☕</p>

        <a href="http://localhost:3000/login" style="display: inline-block; padding: 10px 20px; margin-top: 15px; background-color: #8B4513; color: #fff; text-decoration: none; border-radius: 4px;">
          Go to Dashboard
        </a>

        <p style="margin-top: 30px;">Need help? Just reply to this email or contact us at <a href="mailto:support@your-coffee-cafe.com">support@your-coffee-cafe.com</a>.</p>

        <hr style="border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 12px; color: #888;">© 2025 Coffee Cafe. All rights reserved.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent to:", toEmail);
  } catch (err) {
    console.error("❌ Error sending welcome email:", err);
  }
};
