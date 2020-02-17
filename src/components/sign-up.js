import React from 'react';
import axios from 'axios';

class SignupForm extends React.Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
	handleSubmit(event) {
		event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
		//request to server here
		axios.post('/', {
			username: this.state.username,
			password: this.state.password
		})
			.then( response => {
				console.log(response);
				if (response.data) {
					console.log('successful signup');
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('error in signup data');
				}
			})
			.catch( error => {
				console.log('error in signup process');
				console.log(error);
			});
	}

    render() {
        return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>            
        )
    }
}

export default SignupForm;
