
//Decide how to store all of the message components for your game.

//Add functionality to randomly select the different message components so they can create a cohesive message.


const verbs = ['could','should','must','need to','probably should'];

const actions = ['get a dog','start a new job','buy a bonsai','run a coffee shop'];

let randIndexVerbs = Math.floor(Math.random() * verbs.length );
let randIndexActions = Math.floor(Math.random() * verbs.length);


console.log(`you ${verbs[randIndexVerbs]} ${actions[randIndexActions]}`);
