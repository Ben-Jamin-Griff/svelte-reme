import Project from '../../models/project.js'
import User from '../../models/user.js'
import sanitizeHtml from 'sanitize-html'

export const post = async (req, res, next) => {
        const projectData = req.body.project

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

projectData.description = sanitizeHtml(projectData.description, {
    allowedTags: [ 'b', 'u', 'i', 'em', 'strong', 'p', 'br' ]
  })

        const userEmail = req.session.passport.user
        User.findOne({ where: {email: userEmail }}).then(user => {
                projectData.creator = userEmail
                Project.create(projectData)
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
})}
