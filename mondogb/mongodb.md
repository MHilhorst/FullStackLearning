### MongoDB

MongoDB is a NoSQL, there is not a real relational scheme and there is no predefined structuring.
MongoDB is scaleable.

www.mongodb.com

Running MongoDB

  use testdb
  show dbs
  mongo
  cls > clear
  db > current db

Creating user in Mongodb:

  db.createUser({
    user:"brad",
    pwd:"1234",
    roles:["readWrite","dbAdmin"]
    });

Collections are the instances of an object.

  db.createCollection('customers');

  show collections

Inserting instances into a particular collection.

  db.customers.insert({
    first_name:"john",
    last_name:"Doe"
    });

  db.customers.find(); // Outputs the instances located to the collection customers, ID fields are automatic generated


Multiple instances, in MongoDB we can just add another type if wanted. This is an advantage of NoSQL:

  db.customers.insert([{
    first_name:"Mieke",
    last_name:"Roos",
    type:"Female"
    },
    {
    first_name:"dirk",
    last_name:"scholten"  
    }]);

To append to a item in the database:

  db.customers.update({first_name:"john"},{first_name:"John",last_name:"Doe",gender:"Male"}); // in real-world you should use the id ofcourse. This is not unique.

  db.customers.update({first_name:"dirk"},{$set:{gender:"male"}}); // Just add something new and leave what was previous there already.

  db.customers.update({first_name:"Mieke"},{$set:{age:45}});
  db.customers.update({first_name:"Mieke"},{$inc:{age:5}}); // Increase value , this will output now age:50 for Mieke.

To remove a field:

  db.customers.update({first_name:"John"},{$unset:{gender:1}}); // Now we REMOVED gender

To rename:
  db.customers.update({first_name:"John"},{$rename:{"gender":"sex"}})

Remove:
  db.customers.remove({first_name:"John"},{justOne:true}); // Will delete all users with first_name:"John", however if you use justOne:true it will delete only the first one found.

Query Find:
  db.customers.find({name:"Leanne Graham"}); // Find leanne Graham

Query Find OR:
  db.customers.find({$or:[{name:"Leanne Graham"},{name:"Ervin Howell"}]}); // Both Outputs

Query operator greater THAN and lesser etc:
  db.customers.find({id:{$gt:4}});

Query find deep nested:
  db.customers.find({"address.city":"Wisokyburgh"}); // See the quotes for nested search

Sorting:
  db.customers.find().sort({id:1});
