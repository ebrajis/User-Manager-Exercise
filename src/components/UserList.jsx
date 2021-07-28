import React, { Component } from 'react';
import UserItem from './UserItem';

class UserList extends Component {
  render() {
    return (
      <div>
        <h1>userList</h1>
        <div className="users-list d-flex flex-wrap">
          {this.props.users.map((user) => (
            <UserItem onDelete={this.props.onDelete} user={user} key={user._id} />
          ))}
        </div>
      </div>
    );
  }
}
export default UserList;
