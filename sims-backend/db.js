// The Maintenance room(handles the raw connection)
const  { MongoClient } = require('mongodb'); 

let dbConnection; //undefined var now, later it will hold live db stream

module.exports = { // module.exports {...} is blobal obj,everything inside is shipped and used by another file
    connectToDb: (cb) => {// connectToDb is function that physically dials the database on port 27017 and verifies if the connection is alive
        MongoClient.connect('mongodb://localhost:27017/schoolstore')
        .then((client) => {
            dbConnection = client.db();// client.db() is method that select database instance
            return cb();
        })
        .catch((err) => {
            console.log(err);
            return cb(err); 
        })
    },
    getDb: () => dbConnection // when controllers call this func, it returns the live db connection.
};