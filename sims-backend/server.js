// The CEO/ Main Gate (starts everything up)
//React sends an API request to (server.js)
//( server.js) passes it to the  reception desk(routes) to see which path was clicked
//The (routes) reads the path and calls the specific worker in the Brains department(controllers)
// The worker (controllers) reaches into the maintenance room(db.js) to pull or save data in MongoDB, then hands it back  to React.

const express = require('express');


const cors = require('cors');
const app = express();

const { connectToDb } = require('./db');
const studentRoutes = require('./routes/studentRoutes');


app.use(cors());
app.use(express.json());
app.use(studentRoutes);


const PORT = 3000;

connectToDb((err) => {
  if(!err)  {
    app.listen(PORT, () => {
      console.log(`SIMS Backend server is listening cleanly on port ${PORT}`);
    });
  } else {
    console.log('Database connection failed. Server cannot start.');
  }
});