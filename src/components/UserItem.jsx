import React, { Component } from 'react';
class UserItem extends Component {
  render() {
    return (
      <div>
        <h2>user item</h2>
        <div className="card m-2">
          <div className="card-header">Place type: </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Continent:</p>
            <p className="card-text">Population:</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserItem;
