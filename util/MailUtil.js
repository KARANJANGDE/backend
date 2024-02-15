const mailer = require("nodemailer");

const sendMail = async (to, subject, text) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "betterhousing49@gmail.com",
      pass: "cbvnbwpcugcuyoos",
    },
  });
  const mailOptions = {
    from: "betterhousing49@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  const res = await transporter.sendMail(mailOptions);
  console.log(res);
};

// sendMail("jangdekaran4@gmail.com","Test","HELLO SUCCESSFUL");
module.exports = {sendMail};