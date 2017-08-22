var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3001; // sets localhost
  process.env.MONGODB_URI = 'mongodb://localhost:27017/todos'; // set local db
} else if ( env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/todos_test';
} else if (env === 'localtest') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/todos_test'; // set local db
}