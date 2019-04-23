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
