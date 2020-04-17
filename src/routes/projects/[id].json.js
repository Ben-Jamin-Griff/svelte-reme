import projects from './_projects.js'

const lookup = new Map()
projects.forEach(project => {
        lookup.set(project.id, JSON.stringify(project))
})

export function get(req, res, next) {
        const { id } = req.params

        if (lookup.has(id)) {
                res.writeHead(200, {
                        'Content-Type': 'application/json'
                })

                res.end(lookup.get(id))
        } else {
                res,writeHead(404, {
                        'Content-Type': 'application/json'
                })

                res.end(JSON.stringify({
                        'Content-Type': 'application/json'
                }))
        }
}
