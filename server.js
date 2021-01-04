const express = require('express')
const app = express()
const knex = require('./connection/create_table')
const router = express.Router()
const text = require('./text.json');

app.use(express.json())
app.use('/', router);

require('./routers/get')(router)
require('./routers/post')(router)
require('./routers/put')(router)
require('./routers/delete')(router)

app.listen(8000, () => {
    console.log('server has started on port 8000')
})