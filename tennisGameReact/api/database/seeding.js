const db = require('./index.js');

var user = {};

for(var i = 1; i<=50; i++){

    user.user = 1;
    user.level = i;
    user.passed = false;
    user.pattern = '111111000000111111000000111111'

    db.save(user);
}
db.replace();
console.log(user);