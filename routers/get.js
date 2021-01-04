const knex = require('../connection/knex_connection')
const fs = require('fs')

module.exports = (Router) => {
// Here we will get whole data from text.json file.
    Router.get('/get', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                // console.log(varx)
                var dic = {}
                dic['bio'] = varx.bio,
                dic['name'] = varx.name,
                dic['language'] = varx.language,
                dic['poster_image_url'] = varx.poster_image_url,
                dic['country'] = varx.country,
                dic['director'] = varx.director,
                dic['genre'] = varx.genre,
                dic['runtime'] = varx.runtime
                data.push(dic)
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // Here we will get whole data by name
    .get('/getdata/:name', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                if(varx.name == req.params.name){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    data.push(dic)
                }
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)

        })
    })

    //  Here we will get whole data by language
    .get('/get_data/:language', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((response) => {
            for(varx of file){
                if(varx.language == req.params.language){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    response.push(dic)
                }
            }
            console.log(response)
            res.send(response)
        })
        .catch((err) => {
            console.log(err)

        })
    })

    // Here we will get whole data by country
    .get('/get/data/:country', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                if(varx.country == req.params.country){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    data.push(dic)
                }
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)

        })
    })

// Here we will get whole data by director
   .get('/get/DATA/:director', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                if(varx.director == req.params.director){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    data.push(dic)
                }
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)

        })
    })



// Here we will get whole data by genre
   .get('/Get_data/:genre', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                if(varx.genre == req.params.genre){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    data.push(dic)
                }
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)

        })
    })


// Here we will get whole data by runtime
   .get('/GET/data/:runtime', (req, res) => {
        var file = JSON.parse(fs.readFileSync('///home/navgurukul/Desktop/IMDB_data/text.json'))
        // console.log(file)
        knex.select('*').from('movies')
        .then((data) => {
            for(varx of file){
                if(varx.runtime == req.params.runtime){
                    var dic = {}
                    dic['bio'] = varx.bio,
                    dic['name'] = varx.name,
                    dic['language'] = varx.language,
                    dic['poster_image_url'] = varx.poster_image_url,
                    dic['country'] = varx.country,
                    dic['director'] = varx.director,
                    dic['genre'] = varx.genre,
                    dic['runtime'] = varx.runtime
                    data.push(dic)
                }
            }
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)

        })
    })


    // Whenever I will post some data in my database then I will get these data very easily.
    // Here we will get whole data
    .get('/getwholedata', (req, res) => {
        knex.select('*').from('movies')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // Here we will get the data by id
    .get('/getwholedata/:movie_id', (req, res) => {
        var movie_id = req.params.movie_id
        knex.select('*').from('movies')
        .where('movies.movie_id', movie_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
        
    })
    

    
}