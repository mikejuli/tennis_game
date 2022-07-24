const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost/Level') //the name has to be changed!

//  mongoose.connect('mongodb://172.17.0.4:27017/Level') //the name has to be changed!




const levelsSchema = mongoose.Schema ({

  user: String,
  level: Number,
  passed: Boolean,
  pattern: String

})

const userSchema = mongoose.Schema ({

  user: String,
  password: String,
  token: String,
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
      password: data.password,
      token: data.token,
      level: data.level,
      gold: data.gold

  });

  console.log('here');


  add.save((err) => {
    console.log(err);

  });

};



let get = (user, cb) => {

  console.log(user, '<!!!!!!!>');
  Level.find({user: user}).exec((err, result) => { cb(err,result) });

};

let getUser = (user, cb) => {

  console.log(user, '<---');
  User.find({user: user}).exec((err, result) => { cb(err,result) });

};

let loginUser = (user,password, cb) => {


  //craete token for each session
  const rand = () => {
    return Math.random().toString(36).substr(2);
  };

  const token = () => {
    return rand() + rand();
  };

  var tokenCreated = token();



  console.log(user,password, '<-------?-');
  User.findOne({user:user, password: password}).exec((err, result) => {


    User.findOneAndUpdate( {user: user} , {$set:{token:tokenCreated}}, {new: true}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }


      User.findOne({user:user, password: password}).exec((err, result) => {


        cb(err,result)

      })



    })




  });

};


let loginUserToken = (user,token, cb) => {





  console.log(user,token, '<-------?-');
  User.findOne({user:user, token: token}).exec((err, result) => {cb(err,result) });

};


let findAndReplace = (user,level, cb) => {
  console.log(level, 'from find');
 Level.findOneAndUpdate( {user: user, level:level} , {$set:{passed:true}}, {new: true}, (err, doc) => {
  if (err) {
      console.log("Something wrong when updating data!");
  }
  Level.find({user:user}).exec((err, result) => { cb(err,result) });
  console.log(doc);

})

}

let findAndReplaceUserLevel = (user,cb) => {

  User.find({user: user}).exec((err, result) => {

    var s =result[0].level + 1;
    console.log('last level',s);

    User.findOneAndUpdate( {user: user} , {$set:{level:s}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    User.find({user:user}).exec((err, result) => { cb(err,result) });
    console.log(doc);

  })
    });
}


let findAndReplaceUserGold = ( user, gold, cb) => {

    User.findOneAndUpdate( {user: user} , {$set:{gold:gold}}, {new: true}, (err, doc) => {
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
module.exports.loginUserToken = loginUserToken;