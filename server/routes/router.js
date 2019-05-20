const express = require('express');
const router = express.Router();
const pool = require('../pool');


router.get('/', (req, res) => {
    console.log(`In /feedback GET`);

    let feedbackQueryText = `SELECT * FROM "feedback";`;
    pool.query(feedbackQueryText).then((result) => {
        // send back our query results as an array of objects
        res.send(result.rows); // result.rows will always be an Array
    }).catch((error) => {
        console.log(`Error in GET /feedback ${error}`);
        // 500 means "server error", generic but effective
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log(`In /feedback POST with`, req.body);

    const feedbackToAdd = req.body;
    const feedbackQueryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    console.log('feedbackToAdd:', feedbackToAdd);
    pool.query(feedbackQueryText, [feedbackToAdd.feeling, feedbackToAdd.understanding, feedbackToAdd.support, feedbackToAdd.comments])
        .then((responseFromDatabase) => {
            console.log(responseFromDatabase);
            // 201 means "created"
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /feedback ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
