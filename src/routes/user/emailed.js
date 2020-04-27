import Project from '../../models/project.js';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const post = async (req, res, next) => {
        const msg = req.body.msg;

        Project.findOne({ where: { id: req.body.code }})
        .then(result => {

                msg.to = result.dataValues.creator; 
                        
                try {
                    console.log(msg)
                     sgMail.send(msg); 
                }  catch (error) {
             console.error(error);
           if (error.response) {
             console.error(error.response.body)
                }
           }
 
                
                res.writeHead(200, {
                        'Content-Type': 'application/json'
                })

                res.end(JSON.stringify({ status: 'success', result }))
        })
}


