import React, { Component } from 'react';
import UserForm from './components/UserForm';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      users: [1, 2, 3],
    };
  }
  createNewUser = async (dataToCreateNewUser) => {
    console.log('createNewUser in app.jsx');
    // console.log('dataToCreateNewUser', dataToCreateNewUser);
    try {
      const createResult = await axios.post('http://localhost:3000/api/user/new', dataToCreateNewUser);
      console.log('createResult', createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="container d-flex">
            <UserForm onCreateNewUser={this.createNewUser} />
            <UserList users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
