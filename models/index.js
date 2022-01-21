const fs = require('fs');
const path = require('path');
const {Client} = require('pg');
const config = require('../config/db.json');

const dbConfig = config[process.env.NODE_ENV || 'development'];
const currentFile = path.basename(__filename);

const client = new Client(dbConfig);
client.connect();
process.on('beforeExit', () => client.end() );

const db = {
  client,
}
fs.readdirSync(__dirname)
  .filter(fileName=>/\.js$/.test(fileName) && fileName!==currentFile)
  .forEach(fileName=>{
    const Model = require(path.resolve(__dirname, fileName));
    Model.client = client;
    db[Model.name] = Model;
})

module.exports = db;