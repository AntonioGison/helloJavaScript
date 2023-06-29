// The Router does not redirect to a new JavaScript page. Instead, it renders a new component inside itself, 
// specifically within the top-level component. When the URL changes, the Router determines which child 
// component to render based on the new URL. This allows for dynamic rendering of different components based on the URL, without
//  causing a full page reload.

<Router>
 
 {/* Renders when the URL matches '/about' */
 <Route path='/about'>  
   <About />
 </Route>

 {/* Always renders */}
 <Route>
   <Sidebar />
 </Route>

</Router>

or 

<Route path="/dashboard" component={Dashboard} />

//example 
 {isLoggedIn && <Route path="/dashboard" component={Dashboard} />}

//  the Link and NavLink components which can be imported from react-router-dom on their own or alongside the other components we’ve already imported.

 import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// Both Link and NavLink components work much like anchor tags:

// They have a to prop that indicates the location to redirect the user to (similar to the anchor tag’s href attribute)
// They wrap some HTML to use as the display for the link
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>


//Both NavLink and Link are components provided by the Router library in React to create links for navigating between
// different pages or sections of a website.

// Link is a basic component used to create a clickable link that takes the user to a specific URL when clicked. It is like a normal HTML 
//anchor tag (<a>)so you can use a selector in css, but it is aware of the Router's functionality.

// NavLink, on the other hand, is an enhanced version of Link that adds extra features specifically designed for navigation.
// It allows you to apply special styles or classes to the link when it matches the current URL. For example, you can highlight 
//the active link to indicate the user's current page.

// Both Link and NavLink are used in conjunction with the Router library to create clickable links for navigation within a React application.


//Dynamic Routes

<Route path='/articles/:title'>
  <Article />
</Route>

//:title access to all the articles when clicked


//-------------------------------------------------
//-------------------------------------------------

//Switch will render the first of its child routes whose path prop matches the current URL.

<Switch>
  <div>
    <Route path='/articles/new'>
      <NewArticle />
    </Route>
    <Route path='/articles/:title'> //don't forget to add the most specific at the top
      <Article />
    </Route>
    <Route path='/articles'>
      <Articles />
    </Route>
  </div>
</Switch>



//By using React Router’s exact prop on the first route, you can ensure that the route will match only if the current URL is an exact match.

 <Route exact path='/'>
 <Home />
</Route>

//-------------------------------------------------
//-------------------------------------------------


const {url, path} = useRouteMatch();  //it returns an object that contains various properties, including path, url, isExact, and params.

//So, in simple terms
// the url tells you where you are currently
// and the path helps you figure out where you need to go and what to show along the way

//-------------------------------------------------
//-------------------------------------------------

import { Redirect } from 'react-router-dom'
//use redirect when the user is not logged 
if(!loggedIn){
    return (
      <Redirect to={'/sign-up' }/>
    )

//-------------------------------------------------
//-------------------------------------------------
import { useHistory } from 'react-router-dom';

//DONT FORGET TO CREATE A NEW CONST, otherwise it doesnt work
const history = useHistory();

history.push(location) //which redirects the user to the provided location

In addition to history.push(), the history object has a few more useful methods for navigating through the browser’s history:

history.goBack() which navigates to the previous URL in the history stack
history.goForward() which navigates to the next URL in the history stack
history.go(n) which navigates n entries (where positive n values are forward and negative n values are backward) through the history stack


//-------------------------------------------------
//-------------------------------------------------

import { useLocation } from 'react-router-dom'
 
// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const order = queryParams.get('order');
  console.log(order); // Prints 'DESC'
};


//-------------------------------------------------
//-------------------------------------------------

// USE PARAMS
//In React Router, the useParams() hook allows you to access the parameters defined in the URL of your application.
// Here's an example of how you can use useParams() in a React component:


import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      {/* Additional user profile information */}
    </div>
  );
};
//In this example, assuming you have set up your routes correctly, when the URL matches the route associated with the UserProfile component,
// such as /user/:username, the useParams() hook will extract the value of :username from the URL.
// You can then use it within your component by accessing the username variable