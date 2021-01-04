const { Router } = require('express')
const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    // Here we can delete the data by runtime
    Router.delete('/delete/:runtime', (req, res) => {
        knex('movies')
        .where('runtime', req.params.runtime)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // Here we can delete the data by genre
    Router.delete('/delete_data/:genre', (req, res) => {
        knex('movies')
        .where('genre', req.params.genre)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // Here we can delete the data by director
    Router.delete('/delete_Data/:director', (req, res) => {
        knex('movies')
        .where('director', req.params.director)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

// Here we can delete the data by name
    Router.delete('/delete/data/:name', (req, res) => {
        knex('movies')
        .where('name', req.params.name)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

// Here we can delete the data by language
    Router.delete('/DeleteData/:language', (req, res) => {
        knex('movies')
        .where('language', req.params.language)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

}