import React, { Component } from 'react';
import UserItem from './UserItem';

class UserList extends Component {
  render() {
    return (
      <div>
        <h1>userList</h1>
        {this.props.users.map((user) => (
          <UserItem user={user} key={user} />
        ))}
        <div className="users-list d-flex flex-wrap">
          {this.props.users.map((user) => (
            <UserItem user={user} key={user} />
          ))}
        </div>
      </div>
    );
  }
}
export default UserList;
