const express = require('express')


const cors = require('cors')

const app = express()

app.use(cors('*'))


app.get('/', (request, response) => {
    response.send('Exam Day Practice')})

    app.listen(4010, '0.0.0.0', () => {
        console.log('server started on port 4010')
      })    