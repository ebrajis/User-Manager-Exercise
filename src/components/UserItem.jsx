import React, { Component } from 'react';
import UserForm from './UserForm';

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOn: false,
    };
  }

  handleEdit = (UpdatedUser) => {
    if (this.state.isEditOn) this.props.onUpdate(this.props.user._id, UpdatedUser);
    this.setState({ isEditOn: !this.state.isEditOn });
  };

  render() {
    const { user: u } = this.props;
    return (
      <div className="card m-2 text-center">
        {this.state.isEditOn ? (
          <UserForm user={u} onEdit={this.handleEdit} />
        ) : (
          <React.Fragment>
            <div>
              <div className="card-header">Vartotojas </div>
              <p className="card-title">Vartotojo vardas: {u.username}</p>
              <p className="card-title">Vartotojo el pastas: {u.email}</p>
              <p aria-hidden="true" className="card-title">
                Vartotojo slaptazodis:
              </p>
              <label className="card-title" for="password">
                {u.password}
              </label>
              <p className="card-title">Vartotojo amzius: {u.age}</p>
            </div>
            <div className="card-footer">
              <button onClick={this.handleEdit} className="btn btn-success m-2">
                Redaguoti
              </button>
              <button onClick={() => this.props.onDelete(u._id)} className="btn btn-danger m-2">
                Istrinti
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default UserItem;
