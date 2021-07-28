import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    account: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      age: '',
      agreement: false,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('stop right there');
  };

  render() {
    return (
      <div className="user-form">
        <h1>Vartotojo duomenų forma</h1>
        <div className="d-flex">
          <form onSubmit={this.handleSubmit}></form>
            <input className="input" type="text" name="username" placeholder="Vartotojo vardas" />
            <input className="input" type="text" name="email" placeholder="El.Paštas" />
            <input className="input" type="text" name="password" placeholder="Slaptažodis" />
            <input className="input" type="text" name="repeatPassword" placeholder="Pakartoti Slaptažodi" />
            <input className="input" type="text" name="age" placeholder="Amžius" />
            <button type="submit">Sukurti</button>
            <button type="submit">Ištrinti</button>
            <button type="submit">Redaguoti</button>
            <button type="submit">Peržiūrėti</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
