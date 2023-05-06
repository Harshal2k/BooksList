const mongoose = require('mongoose');
const db = `mongodb+srv://harshalgosawi:mongodbHarshal2k@bookslist.co15j1q.mongodb.net/`

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      },
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;