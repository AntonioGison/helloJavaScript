import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';


  //step 0: a refresh if needed https://www.w3schools.com/react/react_lifecycle.asp
export class Profile extends React.Component {
    //step 1: create a constructor and set the state of your data
    constructor(props){
    super(props)
    this.state = { userData: null}
  }

  //step 2: create a method to fetch userdata
  loadUserData() {
    this.setState({ userData: null }); 
    // Fetches the user data 
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
  }

  //step 3: add the lifecycle method to mount the component
  componentDidMount(){
    this.loadUserData();
  }


  //step 6: we unmount the component to stop fetching data when we don't need them
  componentWillUnmount(){
    cancelFetch(this.fetchID);
  }


//step 7: when you change profile you want to update on the browser
// If the username has changed we want to stop the fetch and load new user data
  componentDidUpdate(prevProps){
    if(this.props.username !== prevProps.username){
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  render() {
    //step 4: isLoading should be true if is it actually fetching data
    // in this case if we don't have any user data yet it should be true
    const isLoading = this.state.userData === null ? true : false;

    //step 5A: create variables and replace inside the return
    let name = isLoading ? 'Loading...' : this.state.userData.name;
    let bio = isLoading ? 'Loading...' : this.state.userData.bio;
    let friends = isLoading ? [] : this.state.userData.friends;
    let className = 'Profile';
    let imgg = isLoading ? "" : <img src={this.state.userData.profilePictureUrl} alt="" />;

    if (isLoading) {
      className += ' loading';
    }

    return (
      //step 5B: create variable and replace inside the return es: {className}
      <div className={className}>
        <div className="profile-picture">{imgg}</div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}