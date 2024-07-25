const express = require('express')
const hbs = require('hbs')
const cities = require('./index.js')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('public'))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render('home', {cities})
})
app.post('/register', (req, res) => {
    res.render('preview',{
            fullName:`${req.body.firstName} ${req.body.lastName}`,
            age:req.body.age,
            city:req.body.city,
            parentName:`${req.body.pFirstName} ${req.body.pLastName}`
    })
})

app.listen(5000, (err) => {
    if(!err){
        console.log('Server connected at port 5000')
    }else {
        console.log(`An error occured ${err}`)
    }
})