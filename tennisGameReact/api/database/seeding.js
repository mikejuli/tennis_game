const db = require('./index.js');

// var user = {};

// // for(var i = 1; i<=50; i++){

// //     user.user = 1;
// //     user.level = i;
// //     user.passed = false;
// //     user.pattern = '111111000000111111000000111111'

// //     db.save(user);
// // }

//  db.replace(1,(err,result)=>{if(err){console.log(err)}});
// // console.log(user);

// user.user = 1;
// user.level = 1;

// //db.saveUser(user);

// //  db.replaceLevel((err,result)=>console.log(result));

var collection = db.levels.find();
var i =0;
while(collection.hasNext()){

  db.levels.findOneAndUpdate({"level":1},{$set:{"level":i}});

  i++

}


