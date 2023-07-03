

// Anothe way to handle in Redux without changing the argument
// If a function makes immutable updates to its arguments, it does not change the argument but instead makes a copy and changes that copy.

const immutableUpdater = (obj) => {
    return {
      ...obj,
      completed: !obj.completed
    }
  }
   
  const task = { text: 'iron clothes', completed: false };
  const updatedTask = immutableUpdater(task);
  console.log(updatedTask); 
  // Prints { text: 'iron clothes', completed: true };
   
  console.log(task); 
  // Prints { text: 'iron clothes', completed: false };

  // By copying the contents of the argument obj into a new object ({...obj})
  // and updating the completed property of the copy, the argument obj will remain unchanged.