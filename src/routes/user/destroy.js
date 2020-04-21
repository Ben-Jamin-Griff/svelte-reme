import Project from '../../models/project.js'
import User from '../../models/user.js'

export const post = async (req, res, next) => {
        const projectData = req.body

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

        Project.destroy({
                where: {
                     id: projectData.id   
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
