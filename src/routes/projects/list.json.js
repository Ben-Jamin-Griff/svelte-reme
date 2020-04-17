import Project from '../../models/project.js'

export function get(req, res, next) {

  Project.findAndCountAll()
  .then(result => {
    const projects = result.rows.map(project => project.dataValues)

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(projects))
  })

}
