const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('lloyds');

    //access to questions
    const questionsCollection = db.collection('questions');
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);

    //access to topics
    const topicsCollection = db.collection('topics');
    const topicsRouter = createRouter(topicsCollection);
    app.use('/api/topics', topicsRouter);

    //complete user data (including answers)
    const answerCollection = db.collection('answers');
    const answerRouter = createRouter(answerCollection);
    app.use('/api/answers', answersRouter);
  })
  
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});