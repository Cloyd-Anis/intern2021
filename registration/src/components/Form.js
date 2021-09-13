import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange (event) {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit(event) {
        alert('Successfully registered '+this.state.email+'!');
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={this.state.email} 
                    onChange={this.handleEmailChange} 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value ={this.state.password}
                    onChange={this.handlePasswordChange} 
                    />
                </div>
                <div>
                    <a href="#">Login</a>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
           
        )
    }
}

export default Form
