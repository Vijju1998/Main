const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    });

    console.log('Mongo DB Connected successfully');
  } catch (Error) {
    console.error(Error.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectdb;
