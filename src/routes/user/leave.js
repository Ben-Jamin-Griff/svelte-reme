import User from '../../models/user.js'

export const post = async (req, res, next) => {
        const user = req.user

        if (!req.session.passport) {
                res.writeHead(403, {
                        'Content-Type': 'application/json'
                })
                res.end(JSON.stringify({
                        status: 'error',
                        message: 'Unauthorized'
                }))
                return
        }

        User.destroy({
                where: {
                     email: user.email   
                }})
                .then(() => {
                     res.writeHead(200, {
                       'Content-Type': 'application/json'
                     })
                     res.end(JSON.stringify({ status: 'success', message: 'ok' }))
                     }).catch((err) => {
                        res.writeHead(500, {
                         'Content-Type': 'application/json'
                        })
                        res.end(JSON.stringify({ status: 'error', message: err.name }))

	    })
}
