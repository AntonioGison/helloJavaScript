const initialWagonState ={
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const reducer = (state = initialWagonState, action) => {
  
      switch(action.type){
        case 'gather':
         return  {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
  
        case 'travel':
        
        //action.payload contains nr of days
          return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        };
       
  
        case 'tippedWagon':
        return{
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days +1
        };
  
         default:
          return state;
      }
  
      }
  
  /**
  Let’s try our game out.
  
  Start a game by calling the reducer with an undefined state and empty action object and storing the result in a new variable called wagon (Initialize it with let). Then print the wagon value to the console. */
  let wagon = reducer(undefined,{})
  
  console.log(wagon);
  
  /**Our first day will be dedicated to travel.
  
  Call the reducer with the wagon state and an action with type: 'travel' and payload: 1.
  Store the returned new state back into wagon.
  Print the new state.
  */
  
  wagon = reducer(wagon, {type: 'travel', payload: 1})
  
  console.log(wagon);
  
  
  /**
   * On the second day, we stop to gather supplies.
  
  Call the reducer with the new wagon state and an action with type: 'gather' and no payload.
  Store the new state back into wagon.
  Print the new state.
   */
  wagon = reducer(wagon,{type: 'gather'})
  console.log(wagon);
  
  /**
   * On the third day, we try to ford a rushing river…and our wagon tips over, spilling some supplies.
  
  Call the reducer with the new wagon state and an action with type: 'tippedWagon'.
  Store the new state back into wagon
  Print the new state.
   */
  wagon = reducer(wagon,{type: 'tippedWagon'})
  console.log(wagon);
  
  /**On the following day, we set out for a long 3 days of travel.
  
  Call the reducer with the new wagon state and an action with type: 'travel' and a payload: 3.
  Store the new state back into wagon.
  Print the new state. */
  
  wagon = reducer(wagon,{type: 'travel', payload: 3})
  console.log(wagon);
  
  
  