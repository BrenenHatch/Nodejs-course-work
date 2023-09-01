const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath ))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Brenen Hatch'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Brenen Hatch'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Brenen Hatch'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Orlando, FL'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})