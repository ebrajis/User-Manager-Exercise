import React, { Component } from 'react';
import UserForm from './components/UserForm';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {};
  createNewUser = async (dataToCreateNewUser) => {
    console.log('createNewUser in app.jsx');
    // console.log('dataToCreateNewUser', dataToCreateNewUser);
    try {
      const createResult = await axios.post('http://localhost:3000/api/user/new', dataToCreateNewUser);
      console.log('createResult', createResult);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <UserForm onCreateNewUser={this.createNewUser} />
      </div>
    );
  }
}
export default App;
