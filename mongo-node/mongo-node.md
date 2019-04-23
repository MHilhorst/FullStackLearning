# MongoDB and nodeJS using Express Framework

With express we use middleware that is used before any requests made. Express works with routes and middleware.

  const app = express();
  app.use(bodyParse.json());


Using cloud.mongodb.com we can use Database as a service.

To connect to mongoDB db using node.JS we use mongoose and the mongoDB URI.

for the port that we are running on we use the process.env.PORT or 5000. We use a callback function at the listen to display that we are running and on which port the server is running.

When using Mongoose we need to create a model folder which contains items in it.

Items.js
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  // Creating a schema
  const ItemSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    date: {
      type:Date,
      defeault: Date.now
    }
    });

Then we need to create a model that we can module.exports to other files.

   mongoose.model('name', object);

Routes are used with app.use and a require linkig to the js that takes the router.

When having a custom param in url we can get it by
  req.params.id

The body we can get:
  req.body

Items in the body:
  req.body.id
  req.body.name
  req.body.date

A post is used to create a variable
  var newUser = {
    email: req.body.email,
    password: req.body.password
  };

This variable can be saved to the Mongoose DB
  const User = require('../../models/User');
  User.create(newUser,(err,user) => {
    if(err){
      return next(err);
    }else {
      return res.json(user);
    }
  }

Statics are pretty much the same as methods but allow for defining functions that exist directly on your Model. So instead of a method that you can use with an instance. A Statics you can use to directly define functions on your Model.

  UserSchema.statics.authenticate = function (email,password,callback) {

  }

We see that the third argument of the function is a callback. What exactly is a callback?
A callback is an asynchronous equivalent for a function. It is called at the completion of a given task. Callback's are used to understand Node's asynchronous nature. A Callback is simply a function passed as an argument to another function which will then use it (call it back).

By convention, the first argument of a callback function is an error; if an error is thrown by the parent function, it will be there for you to deal with and if no error is thrown 

Why is this example wrong? :
  let file = fs.readFile(fooFileName);
  console.log("file: ", file);

Due to the asynchronous behaviour of Node.JS console.log will log while file is still undefined! because it is not done fetching it yet. Therefore, we use callback functions to assure that console.log will be able to output the file variable.

SO now we can go on and further analyze this code. We see a .exec method, What is this? When we use mongoose, documents can be retrieved using helpers. Every model method that accepts query conditions can be exectued by means of a callback or the exec method.

  UserSchema.statics.authenticate = function (email,password,callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        }else {
          return callback();
        }
  }

This can also written with Callback
  UserSchema.statics.authenticate = function (email,password,callback) {
    User.findOne({ email: email }, function (err,user) {
      if(err){
        return callback(err)
      } else {
        return callback();
      }
      })

This is query building, however it will not execute:
  User.find({name:"john"})

To execute it we need to use callback or exec:
  User.find({name:"John"},(err,res) => {}); // This will execute

A promise is a proxy for a value not necessarily known when the promise is created

Furtherone,

  User.findOne({email:email})
  .exec(function(err,user){
    if(err){
      return callback(err)
    }else if(!user){
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err,result){
      if(result === true){
        return callback(null, user);
      }else {
        return callback();
      }
      })
    });
  }
