import React from 'react';
import './App.scss';
import AppGame from './AppGame.jsx';
import $ from 'jquery';
import AppCharacter from './AppCharacter';
import axios from 'axios';
import AppLogout from './AppLogout';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentView: "",
      choosen: '',
      character: ''
  }
  this.handleLogout = this.handleLogout.bind(this)

}




  componentDidMount(){






    console.log('mount' ,this.state.currentView);
    var loggedUser = localStorage.getItem('user');

    console.log(loggedUser);
    if(loggedUser) {


      var token = localStorage.getItem('token');

//`authRefresh`
//`https://cs8mzuv9y5.execute-api.us-east-1.amazonaws.com/1/`
      $.ajax({method: 'POST',
      url: `https://arcanepong.com:9000/authRefresh`,
      data: {loggedUser,token},
      success: (result) => {

        if(result){
          //should get this gata from global redux
          axios
            .get(`https://arcanepong.com:9000/checkUserCharacter`, {
              params: { user: loggedUser },
            })
            .then((response) => {
              console.log(response,'response')



              if(response.data[0].activeCharacter !== 'none'){


                this.setState({choosen: 'selected'});
                this.setState({character : response.data[0].activeCharacter})
                console.log('hee', response.data)
              }
            }).then( ()=>{

              if(result){ this.setState({currentView:'game'}) } else { localStorage.clear();}

            }  );


            console.log(result,'from success1')



        } else {

          this.setState({currentView:'logIn'});

        }




      }


      })



    } else {
      console.log('here123');
      this.setState({currentView:'logIn'});

    }

  }




  handleLogout = () => {

    localStorage.clear();
    this.setState({choosen:false});
    this.setState({currentView:'logIn'});
    this.setState({character:''})
  };


  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  newAcc = (login,password) => {

    //rules for login and pass
    if(!login) { var message = document.createElement('div');
    message.setAttribute('id','noEnoughGoldMessage');



    message.setAttribute('style','width: 200px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center;  animation-duration: 5s; ');
    message.style.left = 'calc(50% - (100px))';
    message.textContent = 'Input login'




    var g = document.querySelector('.App');

    g.appendChild(message);



    setTimeout(()=>{ g.removeChild(message);
    },5000) }

    else
    if(password.length<6){

      var message = document.createElement('div');
      message.setAttribute('id','noEnoughGoldMessage');



      message.setAttribute('style','width: 300px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center;  animation-duration: 5s; ');
      message.style.left = 'calc(50% - (150px))';
      message.textContent = 'Password (6 characters minimum)'




      var g = document.querySelector('.App');

      g.appendChild(message);



      setTimeout(()=>{ g.removeChild(message);
      },5000)


    } else



    //



    $.ajax({method: 'POST',
      url: `https://arcanepong.com:9000/newPlayer`,
      data: {login,password},
      success: (result) => {

        console.log('from success registration')
        if(result === 'exist'){


          var message = document.createElement('div');
          message.setAttribute('id','noEnoughGoldMessage');



          message.setAttribute('style','width: 220px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center;  animation-duration: 5s; ');
          message.style.left = 'calc(50% - (110px))';
          message.textContent = 'Player already exists'




          var g = document.querySelector('.App');

          g.appendChild(message);



          setTimeout(()=>{ g.removeChild(message);
          },5000)


      } else if (result === 'created'){


        var message = document.createElement('div');
          message.setAttribute('id','noEnoughGoldMessage');



          message.setAttribute('style','width: 260px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center; animation-duration: 10s; ');
          message.style.left = 'calc(50% - (130px))';
          message.textContent = 'New player\'s been created'




          var g = document.querySelector('.App');

          g.appendChild(message);



          setTimeout(()=>{ g.removeChild(message);
          },10000)


          this.setState({currentView:'logIn'})


      }


        }

      })



  }

  login = (login,password) => {

  //  console.log('here!!',login,password)



//`https://3.213.179.128:9000/auth`
//https://cs8mzuv9y5.execute-api.us-east-1.amazonaws.com/1/
    $.ajax({method: 'POST',
      url: `https://arcanepong.com:9000/auth`,
      data: {login,password},
      success: (result) => {

        console.log(result,'from success')
        if(result){

        localStorage.setItem('user', result.user);
        localStorage.setItem('token', result.token);


          //should get this gata from global redux
        axios
        .get(`https://arcanepong.com:9000/checkUserCharacter`, {
          params: { user: login },
        })
        .then((response) => {
          if(response.data[0].activeCharacter !== 'none'){

            this.setState({choosen: 'selected'})
            this.setState({character: response.data[0].activeCharacter})
          }
        }).then( ()=>{

          var g = document.querySelector('.App');

          if(document.getElementById('noEnoughGoldMessage')){
          g.removeChild(document.getElementById('noEnoughGoldMessage'));
          }

          this.setState({currentView:'game', user: result.user})


        }

          );

      } else {

        var message = document.createElement('div');
        message.setAttribute('id','noEnoughGoldMessage');



        message.setAttribute('style','width: 220px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center; animation-duration: 5s;');
        message.style.left = 'calc(50% - (110px))';
        message.textContent = 'wrong login or password'




        var g = document.querySelector('.App');

        g.appendChild(message);



        setTimeout(()=>{ g.removeChild(message);
        },5000)


      }




      }




      })


  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <div id = 'loginInMenu'>
            <h2 >Sign Up!</h2>
            <div>

            <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px', marginTop: '10px'}}>
                  <label for="username">Username:</label>
                  <input type="text" name = 'username' id="username" required/>
                </div>

                 <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px'}}>
                  <label for="email">Email:</label>
                  <input  type="email" id="email" required/>
                </div>
                <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px'}}>
                  <label for="password">Password:</label>
                  <input type="password" id="password" minlength="8" required/>
                </div>

            </div>
            <div id = 'buyI' style = {{top: '160px', left: '45px'}} onClick = { ()=>this.newAcc(document.getElementById('username').value,document.getElementById('password').value)}>Submit</div>
            <div id = 'buyI' style = {{top: '160px', left: '160px'}} onClick={ () => this.changeView("logIn")}>Go Back</div>
          </div>
        )
        break
      case "logIn":
        return (
          <div id = 'loginInMenu' >
            <h2>Arcane Pong</h2>
            <div>

              <br/>
                  <div style = {{float: 'right',  marginRight: '20px', marginBottom: '10px'}}>
                  <label for="username">Login </label>
                  <input type="text" name = 'username' id="username" required/>
                  </div>

                  <div style = {{float: 'right', marginRight: '20px',  marginBottom: '10px'}}>
                  <label for="password">Password </label>
                  <input type="password" id="password" required/>
                  </div>



            <div id = 'buyI' style = {{top: '150px', left: '45px'}} onClick ={()=>{this.login(document.getElementById('username').value, document.getElementById('password').value);}}>Login</div>

            <div id = 'buyI' style = {{top: '150px', left: '160px'}} onClick={ () => this.changeView("signUp")}>Sign Up</div>

            </div>

                  <div style = {{fontSize: '14px', cursor: 'pointer', width: '140px', height: '20px', marginLeft: '80px', marginTop: '105px', hover: 'color:red'}} onClick={ () => this.changeView("PWReset")}>Forgot Password?</div>

          </div>

        )
        break
      case "PWReset":
        return (
          <div id = 'loginInMenu'>
          <h2>Reset Password</h2>


                <div style = {{float: 'right', marginRight: '20px',  marginBottom: '10px', marginTop: '20px'}}>
                <label for="email">Email: </label>
                <input type="email" id="email" style = {{width: '160px'}}required/>
                </div>
                <div style = {{fontSize: '14px', position:'absolute', top: '120px', left: '20px'}}>A reset link will be sent to your inbox</div>


          <div id = 'buyI' style = {{top: '150px', left: '40px'}}>Send</div>

          <div id = 'buyI' style = {{top: '150px', left: '150px'}} onClick={ () => this.changeView("logIn")}>Go Back</div>
        </div>
        )
      case "game":
        console.log('in the game');
        return(

          <div>
          {this.state.choosen === 'selected'?
          <AppLogout handleLogout = {this.handleLogout}>

          <AppGame handleLogout = {this.handleLogout} character = {this.state.character}/>

          </AppLogout>
          :
          <AppCharacter handleLogout = {this.handleLogout}/>}
        </div>
          )
      default:
        break
    }
  }


render(){



  return (

    <div className="App" >

      <section id="entry-page">



        {this.currentView()}



      </section>




    </div>

  );
}

  }

export default App;
