import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    age: '',
  };

  componentDidMount() {
    this.props.user && this.EditWindowSS();
  }

  EditWindowSS() {
    const { username, email, password, repeatPassword, age } = this.props.user;
    this.setState({ username, email, password, repeatPassword, age });
  }

  clearInputs = () => {
    this.setState({
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      age: '',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, repeatPassword, age } = this.state;
    const dataToCreateNewUser = {
      username,
      email,
      password,
      repeatPassword,
      age,
    };
    if (this.props.user) {
      this.props.onEdit(dataToCreateNewUser);
      return;
    }
    const createSuccess = await this.props.onCreateNewUser(dataToCreateNewUser);
    if (createSuccess) this.clearInputs();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="user-form">
        <h1>Vartotojo duomenų forma</h1>
        <div className="d-flex">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              value={s.username}
              onChange={this.handleInput}
              className="input"
              type="text"
              name="username"
              placeholder="Vartotojo vardas"
            />
            <input
              value={s.email}
              onChange={this.handleInput}
              className="input"
              type="email"
              name="email"
              placeholder="El.Paštas"
            />
            <input
              value={s.password}
              onChange={this.handleInput}
              className="input"
              type="password"
              name="password"
              placeholder="Slaptažodis"
            />
            <input
              value={s.repeatPassword}
              onChange={this.handleInput}
              className="input"
              type="password"
              name="repeatPassword"
              placeholder="Pakartoti Slaptažodi"
            />
            <input
              value={s.age}
              onChange={this.handleInput}
              className="input"
              type="text"
              name="age"
              placeholder="Amžius"
            />
            <div className="buttons">
              <button type="submit" className="btn btn-primary">
                {this.props.product ? 'Sukuriam!' : 'Iššsaugom!'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
