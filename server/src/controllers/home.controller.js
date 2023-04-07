const course = require("../db/mongo/models/course");

const home = (req, res) => {
  course.find({}, async function (err, courses) {
    try {
      await res.json(courses);
    } catch (err) {
      res.status(500).json({ err: "data loading error" });
    }
    // if (!err) {
    //     res.json(courses);
    //     return;
    // }
    // res.status(500).json({ error: 'data loading error' });
  });
}


module.exports = { home }
