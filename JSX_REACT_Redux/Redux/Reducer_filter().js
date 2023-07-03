


const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
      
      case 'favoriteRecipes/addRecipe':
      // Add action.type cases here.
      return [...favoriteRecipes, action.payload];
  
      case 'favoriteRecipes/removeRecipe':
      // Don't forget to set the default case!
      return favoriteRecipes.filter(element => element.id !== action.payload.id);
  
      
      default:
        return state;
  
    }
  }