

//you will need to pass the dispatch method to the component as a prop.

export function App(props) {
    const {state, dispatch} = props;
  
    const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
    const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);
    ...

//extract, in the passed props file

export const FavoriteRecipes = (props) =>{
    // Extract dispatch and favoriteRecipes from props.
    const {favoriteRecipes, dispatch } = props;
    
}