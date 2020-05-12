import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../auth'

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email : '',
      password : '',
      error : '',
      redirectToReferer : false,
      loading : false
    }
  }

  handleChange = name => e => {
    this.setState({[name] : e.target.value, error : ''});
  };

  clickSubmit = e => {
    e.preventDefault();
    this.setState({loading : true});
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    signin(user)
    .then(data => {
      if(data.error) this.setState({error : data.error, loading : false})
      else {
        //authenticate the user
        authenticate(data, () => {
          this.setState({ redirectToReferer : true })
        });
      }
    })
  }


  signinForm = (email, password) => (
    <form>
      <div className="form-group">
        <label htmlFor="" className='text-muted'>Email</label>
        <input onChange={this.handleChange('email')} type="email" className="form-control" value={email} />
      </div>
      <div className="form-group">
        <label htmlFor="password" className='text-muted'>Password</label>
        <input onChange={this.handleChange('password')} type="password" className="form-control" value={password} />
      </div>
      <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Submit</button>
    </form>
  )

  render() {
    const { email, password, error, redirectToReferer, loading } = this.state;
    if(redirectToReferer) {
      return <Redirect to='/' />
    }
    return (
      <div className='container'>
        <h2 className='mt-5 mb-5'>SignIn</h2>
        <div className="alert alert-danger" style={{display : error ? '' : 'none'}}>
          { error }
        </div>
        {
        loading ? 
          <div className="jumbotron text-center">
            <h2>Loading</h2>
          </div> 
          : 
          ''
        }
        {this.signinForm(email, password)}
      </div>
    )
  }
}

export default Signin;