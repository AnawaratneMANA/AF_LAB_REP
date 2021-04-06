const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017//posts', {
    //Optional even without these changers it can start working.
    useNewUrlParser : true,
    useUnifiedTopology : true
});
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
module.exports = {run, client};
