import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppGame from './AppGame.js';
import $ from 'jquery';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentView: "",
  }
  this.handleLogout = this.handleLogout.bind(this)

}



  componentDidMount(){

    console.log('mount' ,this.state.currentView);
    var loggedUser = localStorage.getItem('user');
    console.log(loggedUser);
    if(loggedUser) {


      var token = localStorage.getItem('token');


      $.ajax({method: 'POST',
      url: `http://localhost:9000/authRefresh`,
      data: {loggedUser,token},
      success: (result) => {

        if(result){ this.setState({currentView:'game'}) }

        console.log(result,'from success')

        }

      })



    } else {
      console.log('here123');
      this.setState({currentView:'logIn'});

    }

  }




  handleLogout = () => {

    localStorage.clear();
    this.setState({currentView:'logIn'})
  };


  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  newAcc = (login,password) => {

    $.ajax({method: 'POST',
      url: `http://localhost:9000/newPlayer`,
      data: {login,password},
      success: (result) => {

        console.log('from success registration')
        if(result === 'exist'){


          alert('Player already exists')

      } else if (result === 'created'){

        alert ('You just created a new player')

      }


        }

      })



  }

  login = (login,password) => {

    console.log('here!!',login,password)




    $.ajax({method: 'POST',
      url: `http://localhost:9000/auth`,
      data: {login,password},
      success: (result) => {

        console.log(result,'from success')
        if(result){

        localStorage.setItem('user', result.user);
        localStorage.setItem('token', result.token);


        this.setState({currentView:'game', user: result.user})

      }


        }

      })


  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <div>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </div>
            <button type = "button" onClick = { ()=>this.newAcc(document.getElementById('username').value,document.getElementById('password').value)}>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <div>
            <h2>Welcome Back!</h2>
            <div>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </div>
            <button onClick ={()=>{this.login(document.getElementById('username').value, document.getElementById('password').value);}}>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </div>

        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      case "game":
        console.log('asd');
        return(
          <AppGame handleLogout = {this.handleLogout}/>

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
