const mongoose = require('mongoose');
const devDbURI = "mongodb+srv://gerardoDbUser:3s28mfdt@devfcluster-dbfao.mongodb.net/cintarojadb?retryWrites=true";
const DBURI = process.env.MONGODB_URI || devDbURI;
console.log('===== Connecting to DB ... =====', DBURI);
mongoose.connect(DBURI, { useNewUrlParser: true });

console.log("MongoDB Atlas\nConnection state: ", mongoose.connection.readyState);

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('Error while trying to connecto to the database.\n', error);
}).once('open', () => {
    console.log('Connection established...');
});
