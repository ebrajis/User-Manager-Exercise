import React, { Component } from 'react';
import UserForm from './UserForm';

class UserItem extends Component {
  render() {
    const { user: u } = this.props;
    return (
      <div className="card m-2">
        <div className="card-header">Vartotojas: </div>
        <h5 className="card-title">Vartotojo vardas:</h5>
        <div className="card m-2">{u.username}</div>
        <h5 className="card-title">Vartotojo el pastas:</h5>
        <div className="card m-2">{u.email}</div>
        <h5 className="card-title">Vartotojo slaptazodis:</h5>
        <div className="card m-2">{u.password}</div>
        <h5 className="card-title">Vartotojo amzius:</h5>
        <div className="card m-2">{u.age}</div>
        <div className="card-footer">
          <button className="btn btn-success">Redaguoti</button>
          <button onClick={() => this.props.onDelete(u._id)} className="btn btn-danger">
            Istrinti
          </button>
        </div>
      </div>
    );
  }
}
export default UserItem;