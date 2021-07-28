import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    account: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      age: '',
    },
  };

  render() {
    return <div className="user-form">UserForm</div>;
  }
}

export default UserForm;
