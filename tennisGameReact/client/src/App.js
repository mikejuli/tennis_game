import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppGame from './AppGame.jsx';
import $ from 'jquery';
import AppCharacter from './AppCharacter';
import axios from 'axios';

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


      $.ajax({method: 'POST',
      url: `http://localhost:9000/authRefresh`,
      data: {loggedUser,token},
      success: (result) => {

          //should get this gata from global redux
          axios
            .get(`http://localhost:9000/checkUserCharacter`, {
              params: { user: loggedUser },
            })
            .then((response) => {
              console.log(response,'HEREEEEEEEEEEEEEEE')
              if(response.data[0].activeCharacter !== 'none'){

                this.setState({choosen: 'selected'});
                this.setState({character : response.data[0].activeCharacter})
                console.log('hee', response.data)
              }
            }).then( ()=>{

              if(result){ this.setState({currentView:'game'}) }

            }  );
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


          //should get this gata from global redux
        axios
        .get(`http://localhost:9000/checkUserCharacter`, {
          params: { user: login },
        })
        .then((response) => {
          if(response.data[0].activeCharacter !== 'none'){

            this.setState({choosen: 'selected'})
            this.setState({character: response.data[0].activeCharacter})
          }
        }).then( ()=>{


          this.setState({currentView:'game', user: result.user})

        }

          );

      }




      }




      })


  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <div style = {{width: '260px', height:'200px', position: 'absolute', left: '265px',top: '30%', backgroundColor: 'rgb(20 136 156)', borderRadius: '25px', padding: '5px'}}>
            <h2 >Sign Up!</h2>
            <div>

            <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px', marginTop: '10px'}}>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </div>

                 <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px'}}>
                  <label for="email">Email:</label>
                  <input  type="email" id="email" required/>
                </div>
                <div style = {{float: 'right',  marginRight: '15px', marginBottom: '5px'}}>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </div>

            </div>
            <div id = 'buyI' style = {{top: '160px', left: '40px'}} onClick = { ()=>this.newAcc(document.getElementById('username').value,document.getElementById('password').value)}>Submit</div>
            <div id = 'buyI' style = {{top: '160px', left: '150px'}} onClick={ () => this.changeView("logIn")}>Go Back</div>
          </div>
        )
        break
      case "logIn":
        return (
          <div style = {{width: '260px', height:'200px', position: 'absolute', left: '265px',top: '30%', backgroundColor: 'rgb(20 136 156)', borderRadius: '25px', padding: '5px'}}>
            <h2>Arcane Pong</h2>
            <div>

              <br/>
                  <div style = {{float: 'right',  marginRight: '20px', marginBottom: '10px'}}>
                  <label for="username">Login </label>
                  <input type="text" id="username" required/>
                  </div>

                  <div style = {{float: 'right', marginRight: '20px',  marginBottom: '10px'}}>
                  <label for="password">Password </label>
                  <input type="password" id="password" required/>
                  </div>



            <div id = 'buyI' style = {{top: '150px', left: '40px'}} onClick ={()=>{this.login(document.getElementById('username').value, document.getElementById('password').value);}}>Login</div>
            <div id = 'buyI' style = {{top: '150px', left: '150px'}} onClick={ () => this.changeView("signUp")}>Sign Up</div>

            </div>

                  <div style = {{fontSize: '14px', cursor: 'pointer', width: '140px', height: '20px', marginLeft: '80px', marginTop: '105px', hover: 'color:red'}} onClick={ () => this.changeView("PWReset")}>Forgot Password?</div>

          </div>

        )
        break
      case "PWReset":
        return (
          <div style = {{width: '260px', height:'200px', position: 'absolute', left: '265px',top: '30%', backgroundColor: 'rgb(20 136 156)', borderRadius: '25px', padding: '5px'}}>
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
        console.log('asd');
        return(

          <div>
          {this.state.choosen === 'selected'?<AppGame handleLogout = {this.handleLogout} character = {this.state.character}/>:
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
