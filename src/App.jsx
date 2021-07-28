import React, { Component } from 'react';
import UserForm from './components/UserForm';
import './App.css';

class App extends Component {
  state = {};
  createNewUser = (dataToCreateNewUser) => {
    console.log('createNewUser in app.jsx');
    // console.log('dataToCreateNewUser', dataToCreateNewUser);
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
