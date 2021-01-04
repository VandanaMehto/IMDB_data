const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    // we will update the some data data by name
    Router.put('/update/:name', (req, res) => {
        knex('movies')
        .where('name', req.params.name)
        .update({
            bio: req.body.body,
            country: req.body.country,
            language: req.body.language
        })
        .then((data) => {
            console.log(data)
            res.send('updated...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

// we will update the some data data by language
    Router.put('/update/data/:language', (req, res) => {
        knex('movies')
        .where('language', req.params.language)
        .update({
            name : req.body.name,
            language: req.body.language,
            director: req.body.director
        })
        .then((data) => {
            console.log(data)
            res.send('updated..')
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // we will update the some data data by director
    Router.put('/update_data/:director', (req, res) => {
        knex('movies')
        .where('director', req.params.director)
        .update({
            country: req.body.country,
            language: req.body.language,
            genre: req.body.genre
        })
        .then((data) => {
            console.log(data)
            res.send('updated..')
        })
        .catch((err) => {
            console.log(err)
        })
    })

// we will update the some data data by genre
    Router.put('/updateData/:genre', (req, res) => {
        knex('movies')
        .where('genre', req.params.genre)
        .update({
            country: req.body.country,
            language: req.body.language,
            director: req.body.director
        })
        .then((data) => {
            console.log(data)
            res.send('updated...')
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // we will update the some data data by runtime
    Router.put('/UpdateData/:runtime', (req, res) => {
        knex('movies')
        .where('runtime', req.params.runtime)
        .update({
            country: req.body.country,
            language: req.body.language,
            director: req.body.director
        })
        .then((data) => {
            console.log(data)
            res.send('updated...')
        })
        .catch((err) => {
            console.log(err)
        })
    })
    
}
