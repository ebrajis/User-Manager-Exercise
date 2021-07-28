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
      users: [],
    };
  }

  componentDidMount = async () => {
    this.getAllUsers();
    console.log(this.getAllUsers);
  };

  getAllUsers = async () => {
    try {
      const allUsersFromDb = await axios.get('http://localhost:4000/api/user');
      if (allUsersFromDb.data) {
        this.setState({ users: allUsersFromDb.data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  createNewUser = async (dataToCreateNewUser) => {
    console.log('createNewUser in app.jsx');
    // console.log('dataToCreateNewUser', dataToCreateNewUser);
    try {
      const createResult = await axios.post('http://localhost:4000/api/user/new', dataToCreateNewUser);
      this.getAllUsers();
      console.log('createResult', createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  deleteUser = async (id) => {
    try {
      const deleteResult = await axios.delete('http://localhost:4000/api/user/delete/' + id);
      console.log('deleteResult', deleteResult.data);
      this.getAllUsers();
      if (deleteResult.data) {
        this.getAllUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  updateUser = async (id, updatedDetails) => {
    try {
      const updateData = await axios.put('http://localhost:4000/api/user/update/' + id, updatedDetails);
      if (updateData.data) this.getAllUsers();
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
            <UserList onUpdate={this.updateUser} onDelete={this.deleteUser} users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
