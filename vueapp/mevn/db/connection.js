const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/mevnStack';
const db = monk(connectionString);

// add a debug message -dmr
db.then(()=> { console.log('connected to mongodb ', connectionString); })
module.exports = db;
