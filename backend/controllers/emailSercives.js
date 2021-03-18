const nodemailer = require("nodemailer");
transport = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: "mf.web.creation@gmail.com", pass: "22462814aaa " },
});

const sendEmailConfirmation = async (email, emailToken) => {
  const url = `http://localhost:3000/confirmation/${emailToken}`;
  transport
    .sendMail({
      from: "norely@gromarket.com",
      to: email,
      subject: "email verification",
      html: `confirmation email <a href=${url}> ${url}</a>`,
    })
    .then(() => {
      console.log("email sent");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.sendEmailConfirmation = sendEmailConfirmation;
