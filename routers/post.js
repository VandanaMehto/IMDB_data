const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/post', (req, res) => {
        knex('movies').insert({
            bio: req.body.bio,
            name: req.body.name,
            language: req.body.language,
            poster_image_url: req.body.poster_image_url,
            country: req.body.country,
            director: req.body.director,
            genre: req.body.genre,
            runtime: req.body.runtime
        })
        .then((data) => {
            console.log(data)
            res.send('data has posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}