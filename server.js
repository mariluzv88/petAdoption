const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const cats = require('./models/cats')
const Cat = require('./models/cat')
const dogs = require('./models/dogs')
const Dog = require('./models/dog')
// middleware
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log("I run for all routes")
    next()
})
app.use(methodOverride('_method'));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
// mongoose.connection.once("open", () => {
//     console.log("connected to mongo");
// });

//-------- routes
// seed route
// app.get('/dogs/seed',async (req,res)=>{
//    await Dog.create(dogs)
//    res.redirect("DogIndex")
// })
// app.get('/cats/seed',async (req,res)=>{
//    await Cat.create(cats)
//    res.redirect("CatIndex")
// })
// nav 
app.get('/',(req,res)=>{
    res.render("Nav")
})
// home pages
app.get('/cats', async(req,res)=>{
 let someCats = await Cat.find({})
 res.render("CatIndex",{
    cats:someCats
 })
})
app.get('/dogs',async (req,res)=>{
let someDogs = await Dog.find({})
res.render("DogIndex",{
    dogs:someDogs
})
})
// post new cat/dog 
app.post('/cats', async (req,res)=>{
    if(req.body.HadFirstCheckUp === 'on'){
        req.body.HadFirstCheckUp = true
    }else {
        req.body.HadFirstCheckUp = false
    }
    const NewCat = await Cat.create(req.body)
    console.log(cats)
   
    res.redirect('/cats')
})
app.post('/dogs', async (req,res)=>{
   const NewDog= await Dog.create(req.body)
   
    res.redirect('/dogs')
})
// new pages
app.get('/cats/new',(req ,res) =>{
    res.render("CatNew")
})
app.get('/dogs/new',(req ,res) =>{
    res.render("DogNew")
})
// delete
app.delete('/dogs/:id', async(req,res)=>{
   await Dog.findByIdAndRemove(req.params.id)
    res.redirect('/dogs')
})
app.delete('/cats/:id',async(req,res)=>{
    await Cat.findByIdAndRemove(req.params.id)
    res.redirect('/cats')
})
// edit
// put new cat/dog 
app.put('/cats/:id', async (req,res)=>{
    if(req.body.HadFirstCheckUp === 'on'){
        req.body.HadFirstCheckUp = true
    }else {
        req.body.HadFirstCheckUp = false
    }
    const UpdatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/cats/${req.params.id}`)
})
app.put('/dogs/:id', async (req,res)=>{
    const UpdatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/dogs/${req.params.id}`)
})

// show pages
app.get('/cats/:id', async(req,res)=>{
    const eachCat = await Cat.findById(req.params.id)
    res.render("CatShow",{
        cat: eachCat
    })
})
app.get('/dogs/:id',async (req,res)=>{
    const eachDog = await Dog.findById(req.params.id)
    res.render("DogShow",{
        dog: eachDog
    })
})

// port
app.listen(PORT,(req, res)=>{
    console.log("port on 3k")
})