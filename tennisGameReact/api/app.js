
var cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI')



const db = require('./database/index.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(express.static(__dirname + '/../client/build'));

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);


app.post('/active', function(req, res){

console.log('---------',req.body.level);

  db.replace(req.body.user,req.body.level,(err,result)=>{res.send(result)});



})

app.post('/user', function(req, res){

  console.log('---!---',req.body.level);

    db.replaceLevel(req.body.user,(err,result)=>{res.send(result)});


  })

  app.post('/auth', function(req,res){


    //here we'll implement the way how to generate token every 24 hour a day.

    db.loginUser(req.body.login,req.body.password, (err,result)=>{console.log(result);if(result === []){result = null};res.send(result)});

    console.log('here',req.body.login, req.body.password)


  })


  app.post('/authRefresh', function(req,res){

    //
    //here we'll implement the way how to generate token every 24 hour a day.
    console.log(req.body.loggedUser,req.body.token)
    db.loginUserToken(req.body.loggedUser,req.body.token, (err,result)=>{console.log(result);if(result === []){result = null};res.send(result)});

    console.log('here',req.body.login, req.body.password)


  })


  app.post('/gold', function(req, res){

    console.log('---------from gold',req.body.gold);
       db.replaceGold(req.body.user,req.body.gold,(err,result)=>{res.send(result)});


    })


app.get('/api', function (req, res) {
  // db.save();
  console.log(req.query.level);




  if(req.query.level == 1){

    var pattern =

[
0,0,0,0,1
]

  }
  else

if(req.query.level == 2){

  var pattern =

  [
    0,0,0,1,1
    ]

} else  {

  var pattern =

  [
    0,0,0,0,1
    ]

}



var top = 63;
var left = 3;
var count = 0;
var num = -1;
pattern = pattern.map( (x) => {


  if(count===6)

    {top+= 33; left = 3;count=0;}

    count++;

  if(x===0)
    {left += 63;return 0} else

    if (x===1)
      {
        num++;
        left += 63;
        return [top,left,num] }


})


pattern = pattern.filter(x=>x!==0);


console.log(pattern);
  res.send(pattern)



});


app.post('/activeGET', function (req, res) {

  //db.save();
  console.log(req.body.user);
  db.get(req.body.user,(err,result)=>(res.send(result)));

})


app.post('/userGET', function (req, res) {

  console.log('here123',req.body.user);
  //db.save();
  db.getUser(req.body.user,(err,result)=>(res.send(result)));


})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});





// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
