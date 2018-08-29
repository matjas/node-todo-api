//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'maciej', age: 39};
// var {name} = user;
// console.log(name); //Maciej

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('Users').insertOne({
    //     name: 'Maciej Jaskuła',
    //     age: 39,
    //     location: 'Zielona Góra'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp())
    // });

    db.close();
});