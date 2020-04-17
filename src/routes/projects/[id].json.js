import Project from '../../models/project.js'

export function get(req, res, next) {
        const { id } = req.params

        Project.findByPk(id).then(project => {

        if (project) {
                res.writeHead(200, {
                        'Content-Type': 'application/json'
                })

                res.end(JSON.stringify(project.dataValues))
        } else {
                res.writeHead(404, {
                        'Content-Type': 'application/json'
                })

                res.end(JSON.stringify({
                        message: 'Not found' 
                }))
        }
        })
}
