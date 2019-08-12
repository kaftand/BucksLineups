import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatContainer from './statContainer'

const players = 
[
  {isClicked:false, figPath:"bledser01.jpg", firstName:"Eric", lastName:"Bledsoe" },
  {isClicked:false, figPath:"antetgi01.jpg", firstName:"Giannis", lastName:"Antetokounmpo"},
  {isClicked:false, figPath:"brogdma01.jpg", firstName:"Malcolm", lastName:"Brogdon" },
  {isClicked:false, figPath:"brownst02.jpg", firstName:"Sterling", lastName:"Brown" },
  {isClicked:false, figPath:"canaais01.jpg", firstName:"Isaiah", lastName:"Canaan" },
  {isClicked:false, figPath:"colsobo01.jpg", firstName:"Bonzie", lastName:"Colson" },
  {isClicked:false, figPath:"connapa01.jpg", firstName:"Pat", lastName:"Connaughton" },
  {isClicked:false, figPath:"dellama01.jpg", firstName:"Matthew", lastName:"Dellavedova" },
  {isClicked:false, figPath:"divindo01.jpg", firstName:"Donte", lastName:"DiVincenzo" },
  {isClicked:false, figPath:"duvaltr01.jpg", firstName:"Trevon", lastName:"Duval" },
  {isClicked:false, figPath:"fraziti01.jpg", firstName:"Tim", lastName:"Frazier" },
  {isClicked:false, figPath:"gasolpa01.jpg", firstName:"Pau", lastName:"Gasol" },
  {isClicked:false, figPath:"hensojo01.jpg", firstName:"John", lastName:"Henson" },
  {isClicked:false, figPath:"hillge01.jpg", firstName:"George", lastName:"Hill" },
  {isClicked:false, figPath:"ilyaser01.jpg", firstName:"Ersan", lastName:"Ilyasova" },
  {isClicked:false, figPath:"lopezbr01.jpg", firstName:"Brook", lastName:"Lopez" },
  {isClicked:false, figPath:"makerth01.jpg", firstName:"Thon", lastName:"Maker" },                                                         
  {isClicked:false, figPath:"middlkh01.jpg", firstName:"Khris", lastName:"Middleton" },
  {isClicked:false, figPath:"mirotni01.jpg", firstName:"Nikola", lastName:"Mirotic" },
  {isClicked:false, figPath:"morrija01.jpg", firstName:"Jaylen", lastName:"Morris" },
  {isClicked:false, figPath:"smithja02.jpg", firstName:"Jason", lastName:"Smith" },
  {isClicked:false, figPath:"snellto01.jpg", firstName:"Tony", lastName:"Snell" },
  {isClicked:false, figPath:"wilsodj01.jpg", firstName:"DJ", lastName:"Wilson" },
  {isClicked:false, figPath:"woodch01.jpg", firstName:"Christian", lastName:"Wood" }]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {players:players}
  }
  onClick (i) {
    console.log("hello")
    var players = this.state.players
    players[i].isClicked = !players[i].isClicked 
    this.setState ({players:players})
  }
  render() {
    var playerPics = 
      this.state.players.map(
        function (value, i ) {
          var color = (value.isClicked ? "rgb(8, 68, 21)"  : "rgb(252, 248, 201)")
          return (
            <img 
              alt={value.firstName + " " + value.lastName} 
              key={i} 
              onClick={(() => this.onClick(i)).bind(this)}
              src={"./BucksPhotos/"+ value.figPath} 
              style={
                {border:"5px solid " + color}
              } 
              className={color} />)
        }.bind(this)

      )
    return (
      <div className="App">
        {playerPics}
        <StatContainer lineup={this.state.players.filter(player => player.isClicked)}></StatContainer>
      </div>
    );
  }
}

export default App;
