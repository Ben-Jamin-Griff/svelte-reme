const polka = require('polka')
const server = polka();

server.get('projects/emailed', (req, res) => {
        res.end('Finally');
});
