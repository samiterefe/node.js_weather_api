const path = require('path')
const express =require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')  //grap geocide function
const forecast = require('./utils/forecast') //grap forcat function


const app = express()
const port = process.env.PORT || 3000

//define paths for express
const publicDirctPath = path.join(__dirname, '../public')
const viewDirct = path.join(__dirname, '../templates/views')
const partilasPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewDirct )
hbs.registerPartials(partilasPath)


//Setup static directory to serve
app.use(express.static(publicDirctPath))

app.get('', (req, res)=>{
   res.render('index', {
       title: 'Weather',
       name: 'samuel terefe'
   })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: "About Us",
        name: 'samuel terefe'
    })
})

app.get('/help', (req, res)=>{
   res.render('help', {
       title: "Help ", 
       helpText: "This is usefull text.....",
       name: 'samuel terefe'
   })
})



app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'samuel terefe',
        errorMessage: 'Help article is not found'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    res.send({
        forecast: 'It is snowning And It will rain soon be prepared!!',
        location: 'Addis ababa',
        address: req.query.address
    })

    // geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    //     if (error) {
    //         return res.send({ error })
    //     }

    //     forecast(latitude, longitude, (error, forecastData) => {
    //         if (error) {
    //             return res.send({ error })
    //         }

    //         res.send({
    //             forecast: forecastData,
    //             location,
    //             address: req.query.address
    //         })
    //     })
    // })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term '
        })
    }

    
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('*', (req, res)=>{
   res.render('404', {
       title: 'This is 404 page',
       name: 'Samuel Terefe',
       errorMessage: 'This page not found'
   })
})






// app.get('',  (req, res) => {
//     res.send('hello')
// })

// app.get('/about', (req, res)=>{
//     res.send('about page')
// })

app.listen(port, ()=>{
    console.log('servre running' + port)
})