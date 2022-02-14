const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('capability');

    const questionsCollection = db.collection('questions');
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);

    const topicsCollection = db.collection('topics');
    const topicsRouter = createRouter(topicsCollection);
    app.use('/api/topics', topicsRouter);

    const answerCollection = db.collection('answers');
    const answersRouter = createRouter(answerCollection);
    app.use('/api/answers', answersRouter);

    const teamsCollection = db.collection('teams');
    const teamsRouter = createRouter(teamsCollection);
    app.use('/api/teams', teamsRouter);

    const skillsCollection = db.collection('skills');
    const skillsRouter = createRouter(skillsCollection);
    app.use('/api/skills', skillsRouter);

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter);

    const disciplinesCollection = db.collection('disciplines');
    const disciplinesRouter = createRouter(disciplinesCollection);
    app.use('/api/disciplines', disciplinesRouter);
  
  })

  
  
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});