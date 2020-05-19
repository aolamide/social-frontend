import React, { Component } from 'react';
import { list } from './apiUser';


class Users extends Component {
  constructor() {
    super()
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    list().then(data => {
      if(data.error) {
        console.log(data.error)
      } else {
        this.setState({users : data})
      }
    })
  }

  renderUsers = (users) => (
    <div className='row'>
      {users.map((user, index) => (
        <div className="card col-md-4" key={index}>
        <img className="card-img-top" src="..." alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
      <p className="card-text">{user.email}</p>
          <a href="#kjk" className="btn btn-primary btn-raised btn-sm">VIEW PROFILE</a>
        </div>
      </div>)
      )}
    </div>
  );

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Users</h2>
        {this.renderUsers(users)}
      </div>
    )
  }
}

export default Users;