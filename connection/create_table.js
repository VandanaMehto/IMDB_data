const knex = require('./knex_connection')

knex.schema.hasTable('movies').then((exists) => {
    if(!exists){
        return knex.schema.createTable('movies', (table) => {
            table.increments('movie_id').primary()
            table.string('bio')
            table.string('name')
            table.string('language')
            table.string('poster_image_url')
            table.string('country')
            table.string('director')
            table.string('genre')
            table.string('runtime')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})