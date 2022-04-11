const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/Level')


const levelsSchema = mongoose.Schema ({

  user: String,
  level: Number,
  passed: Boolean,
  pattern: String

})

let Level = mongoose.model('Level', levelsSchema);


let save = (data) => {

  var add = new Level({
      user: data.user,
      level: data.level,
      passed: data.passed,
      pattern: data.pattern
  });

  console.log('here');


  add.save((err) => {
    console.log(err);

  });

};


let get = (level, cb) => {

  console.log(level, '<---');
  Level.find({}).exec((err, result) => { cb(err,result) });

};

let findAndReplace = (level, cb) => {
  console.log(level, 'from find');
 Level.findOneAndUpdate( {user: '1', level:level} , {$set:{passed:true}}, {new: true}, (err, doc) => {
  if (err) {
      console.log("Something wrong when updating data!");
  }
  Level.find({}).exec((err, result) => { cb(err,result) });
  console.log(doc);

})

}


console.log('done');

module.exports.save = save;
module.exports.get = get;
module.exports.replace = findAndReplace;