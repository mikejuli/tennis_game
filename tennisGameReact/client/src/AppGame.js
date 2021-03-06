import React from 'react';
import logo from './logo.svg';
import './App.css';
import Levels from './components/levels';
import Field from './components/gameField';
import $ from 'jquery'

class AppGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {user:undefined,levelChosen:false, level: 0 , pattern: [], active:[], currentLevel: undefined, gold: 0, onfire:false, flying:false, shooting:false, bigPlate: 0};
    this.handle = this.handle.bind(this);
    this.handleOff = this.handleOff.bind(this);
    this.fitLevel = this.fitLevel.bind(this);
    this.buyItem = this.buyItem.bind(this);
  }


  handle(){
this.setState({levelChosen:true})
  }



  buyItem(price, item){

    console.log(price);
    this.setState({gold: this.state.gold - price}, ()=>{

   //done
      $.ajax({method: 'POST',
      url: `http://localhost:9000/gold`,
      data: {user: this.state.user, gold: this.state.gold},
      success: (result) => {

        console.log(result,'from gold');


        }
      })


    });


    if(item === 'onfire'){
      this.setState({onfire: true})
    }

    if(item === 'flying'){
      this.setState({flying: true})
    }

    if(item === 'shooting'){
      this.setState({shooting: true})
    }

    if(item == 'bigPlate'){
      this.setState({bigPlate: this.state.bigPlate+1})
    }

  }




  handleOff(level, currentGold){


      this.setState({onfire: false, flying: false, shooting: false, bigPlate: 0})


      console.log(currentGold);
      this.setState({gold: this.state.gold + currentGold}, ()=>{

        //done
        $.ajax({method: 'POST',
        url: `http://localhost:9000/gold`,
        data: {user: this.state.user,gold: this.state.gold},
        success: (result) => {

          console.log(result,'from gold');


          }
        })


      });




//done
      if(this.state.currentLevel===this.state.level){
      $.ajax({method: 'POST',
      url: `http://localhost:9000/user`,
      data: {user: this.state.user},
      success: (result) => {

        console.log(result,'from success')

        this.setState({currentLevel: result[0].level})

        }

      })

    }

//done
    console.log('invoked handleOff +', level)
    this.setState({levelChosen:false, level:0})

    $.ajax({method: 'POST',
    url: `http://localhost:9000/active`,
    data: {user: this.state.user, level: level+1},
    success: (result) => {

      console.log(result,'from success')

      this.setState({active: result})

      }

    })



  }

  fitLevel(level){

    this.setState({level: level})

  }

   componentDidMount(){

    if(!this.state.user){

      this.setState({user: localStorage.getItem('user')}, ()=>{

        console.log(this.state.user,'WAS MOUNT');
        //done
            $.ajax({method: 'POST',
            url: `http://localhost:9000/activeGET`,
            data: {user:this.state.user},
            success: result => this.setState({active: result})
          })
        //done
          $.ajax({method: 'POST',
          url: `http://localhost:9000/userGET`,
          data: {user:this.state.user},
          success: result => this.setState({currentLevel: result[0].level, gold: result[0].gold})
        })
      }

    )


    }
    }




  componentDidUpdate( prevProps, prevState){




    //instead of this request we should change it on just retriving data(pattern) from active by using level as an index




    if(prevState.level!== this.state.level){


      if(this.state.level){
      var filtred = this.state.active.sort((a,b)=>a.level-b.level);

      var createPattern = filtred[this.state.level-1].pattern.split('').map(x=>parseInt(x));


      var top = 42;
var left = 2;
var count = 0;
var num = -1;
createPattern = createPattern.map( (x) => {

  var health = 1;
  var gold = 45;
  var attribute = 'gun';

  if(count===13)

    {top+= 22; left = 2;count=0;}

    count++;

  if(x===0)
    {left += 42;return 0} else

    if (x===1)
      {
        num++;
        left += 42;
        //testing
         if(count%2==0){attribute='flight'}
         if(count%3==0){
           attribute='plate'
         }
         if(count%4==0){
          attribute='ball'
        }
        if(count%5==0){
          attribute='onfire'
        }
        //
        return [top,left,num, health, gold, attribute] }


})


 createPattern = createPattern.filter(x=>x!==0);


      this.setState({pattern: createPattern, patternChosen: true})

      // $.ajax({method: 'GET',
      // url: `http://localhost:9000/api?level=${this.state.level}`,
      // success: result => this.setState({pattern: result, patternChosen: true})})

      // console.log('update');
      }
    }


  }


render(){

  var popUp;

  if(this.state.levelChosen){

   popUp = <div><Field level = {this.state.level} pattern = {this.state.pattern} handleOff = {this.handleOff} onfire = {this.state.onfire} flying = {this.state.flying} shooting = {this.state.shooting} bigPlate = {this.state.bigPlate} user = {this.state.user}/> </div>

  } else if(this.state.currentLevel) { popUp = <Levels handle = {this.handle} fitLevel = {this.fitLevel} active = {this.state.active} currentLevel = {this.state.currentLevel} arrow = {parseInt((this.state.currentLevel-1)/10)+1} gold = {this.state.gold} buyItem ={this.buyItem} bigPlate = {this.state.bigPlate} handleLogout = {this.props.handleLogout} user = {this.state.user}/>}




  return (

    <div className="App" >

    <div>{popUp}</div>



    </div>

  );
}
}

export default AppGame;
