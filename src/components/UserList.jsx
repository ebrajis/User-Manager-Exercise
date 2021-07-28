import React, { Component } from 'react';
import UserItem from './UserItem';

class UserList extends Component {
  render() {
    return (
      <div>
        <div className="container_title my-4">
          <h1>Vartotojų kortelės</h1>
        </div>
        <div className="users-list d-flex flex-wrap">
          {this.props.users.map((user) => (
            <UserItem onUpdate={this.props.onUpdate} onDelete={this.props.onDelete} user={user} key={user._id} />
          ))}
        </div>
      </div>
    );
  }
}
export default UserList;
