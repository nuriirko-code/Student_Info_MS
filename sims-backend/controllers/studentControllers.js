// the controllers in which this file in is brain(execute database actions)

// fetches students from mongo db
const { getDb } = require('../db');// .. indicates exit controllers folder, go up one level to root directory, and find (db.js)
const { ObjectId } = require('mongodb'); // we import this to look up documents by their unique MongoDB_id tag


const getAllStudents = (req, res) => {
    const  db = getDb();

    db.collection('students')
    .find()
    .toArray()
    .then((students) => {
     res.status(200).json(students);
    })

    .catch((err) => {
        res.status(200).json({error: "Could not fetch the student documents"});
    });
};


// create code
const createStudent = (req, res) => {
    const db = getDb();
    const newStudentData = req.body;// req.body is the incoming data package containing the new student details sent from the frontend client
db.collection('students')
.insertOne(newStudentData) // built in mongodb method whose job is only take a single js object and insert it as a brand new row in database collection.
.then((result) => {
    res.status(201).json(result); //when mongodb  finishes saving the doc, it automatically generates a unique identifier tag named _id and (20l created) sent back
})
 .catch((err) => {
    res.status(500).json({error: "Could not create the new student document"});
 });
};


// update code
const updateStudent = (req, res) => {
    const db = getDb();

    //1. Check if the string ID in the URL is valid for mongodb
    if(!ObjectId.isValid(req.params.id)) { //  req.params.id is the id string like 64fbc123...
        return res.status(400).json({ error: "Not a valid MongoDB document ID" });
    }
    // 2. Convert the text string ID into a real MongoDB objectID object(binary  mongodb key that the filling cabinet can read)
    const studentId = new ObjectId(req.params.id);
   // 3. Grab the  fresh update data coming from the frontend body box
  const updatedData = req.body;

  db.collection('students')
  .updateOne({ _id: studentId }, {$set: updatedData }) // .updateOne({ target }, { action }) built in  mongo db method taking two instructions
  .then((result) => {
   // if no document matched that ID, send a 404 error back   
   if(result.matchedCount === 0) {
    return res.status(404).json({ error: "Student document not found"});
   }
   res.status(200).json(result);
  })

  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: "Could not update the student document"});
  });

};


const deleteStudent = (req, res) => {
    const db = getDb();

    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Nott a valid MongoDB document ID" });
    }

    const studentId = new ObjectId(req.params.id);

    db.collection('students')
    .deleteOne( { _id: studentId })
    .then((result) => {
     if (result.deletedCount === 0) {
        return res.status(404).json({ error: " Student document not found" });
     }
     res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.ststus(500).json({ error: "Could not delete the student document"});
    });
}
module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent };