// doc su objects in js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//get legge soltanto e set imposta, in questo modo accediamo a players this.players come se fosse un oggetto ma e' una funzione
//get ti da un metodo ma lo chiami come una proprieta' dell oggetto
//set prende almeno un parametro e get senza e set

//               spiegato meglio qui https://www.w3schools.com/js/js_object_accessors.asp


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }   
  } 
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);








//----------
const team = {
    _players: [ //un array di oggetti
      { firstName: "roger", lastName: "bunny", age: 43 },
      { firstName: "nat", lastName: "dog", age: 33 },
      { firstName: "joe", lastName: "bull", age: 29 },
    ],
    _games: [
      {opponent: 'napoli',teamPoints: 10, opponentPoints: 3},
      {opponent: 'nyc',teamPoints: 90, opponentPoints: 31},
      {opponent: 'juve',teamPoints: 1, opponentPoints: 4},
    ],
    get players() { 
      return this._players;
    },
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName,newAge){
       let player = { 
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
       };
      this.players.push(player);
    },
  
  
     addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }; 
      this.games.push(game);
    }
  };
  
  
  
  team.addGame('titans',100,98);
  
  team.addPlayer('Bugs','Bunny',76);
  
  console.log(team.games);
  
  
 