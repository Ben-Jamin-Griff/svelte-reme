const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export const mail = async (req, res, next) => {
        console.log(req)
        let msg = req.body

        try {
           await sgMail.send(msg); }
        catch (error) {
             console.error(error);
           if (error.response) {
             console.error(error.response.body)
                }
           }
}


