const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/Level') //the name has to be changed!


const levelsSchema = mongoose.Schema ({

  user: String,
  level: Number,
  passed: Boolean,
  pattern: String

})

const userSchema = mongoose.Schema ({

  user: String,
  password: String,
  level: Number,
  gold: Number

})


let Level = mongoose.model('Level', levelsSchema);

let User = mongoose.model('User', userSchema);

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

let saveUser = (data) => {

  var add = new User({
      user: data.user,
      level: data.level,
      gold: data.gold

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

let getUser = (user, cb) => {

  console.log(user, '<---');
  User.find({}).exec((err, result) => { cb(err,result) });

};

let loginUser = (user,password, cb) => {

  console.log(user,password, '<-------?-');
  User.findOne({user:user, password: password}).exec((err, result) => {cb(err,result) });

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

let findAndReplaceUserLevel = ( cb) => {

  User.find({user: '1'}).exec((err, result) => {

    var s =result[0].level + 1;
    console.log(s);

    User.findOneAndUpdate( {user: '1'} , {$set:{level:s}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    User.find({}).exec((err, result) => { cb(err,result) });
    console.log(doc);

  })
    });
}


let findAndReplaceUserGold = ( gold, cb) => {

    User.findOneAndUpdate( {user: '1'} , {$set:{gold:gold}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    cb(err,doc);

  })

}



console.log('done');

module.exports.save = save;
module.exports.get = get;
module.exports.replace = findAndReplace;
module.exports.saveUser = saveUser;
module.exports.getUser = getUser;
module.exports.replaceLevel = findAndReplaceUserLevel;
module.exports.replaceGold = findAndReplaceUserGold;
module.exports.loginUser = loginUser;