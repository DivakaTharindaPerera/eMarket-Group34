const passport = require ("passport");
const mongoose = require ("../DbConnect")
const passportLocal =require ("passport-local");
const bcrypt = require ("bcrypt");
const session =require ("express-session");
const MongoStore = require ('connect-mongo');
//const ENV = require ("../core/HandleEnv.js");
const App = require("../App")

const options={
    client: mongoose.connection.getClient(),
    dbName: process.env.DB_NAME,
    collection: 'sessions',
    ttl:20,
}
App.use(session({
    secret:"veryGood",
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create(options),
}))
App.use(passport.initialize(undefined))
App.use(passport.session(undefined))
passport.serializeUser(function(user,done){
    done(null,user._id)
})
passport.deserializeUser(async function(id,done){
    const result=await Database.findById("users", id)
    if(result) done(null,result)
    else done(null,false)
})
//Use the express router
const LocalStrategy = passportLocal.Strategy
console.log()
passport.use("local",new LocalStrategy({},function(username,password,done){
    mongoose.connection.db.collection('mytables').findOne({userName:username},function(err,user){
            if(err) return done(err)
            if(!user) return done(null,false,{message:'Incorrect username'})
            bcrypt.compare(password,user.password,function(err,res){
                    if(err) return done(err)
                    if(res) return done(null,user)
                    else return done(null,false,{message:'Incorrect password'})
                }
            )
        }
    )
}));

module.exports =passport