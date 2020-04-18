import Project from '../../models/project.js'
import User from '../../models/user.js'

export async function get(req, res, next) {
if (!req.session.passport || !req.session.passport.user) {
  res.writeHead(403, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({
    status: 'error',
    message: 'Unauthorized'
  }))

  return
}
const userEmail = req.session.passport.user;

  Project.findAndCountAll(
    {
    where: {
            creator: userEmail 
    }})

  .then(result => {
    const projects = result.rows.map(project => project.dataValues)

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(projects))
  })

}
