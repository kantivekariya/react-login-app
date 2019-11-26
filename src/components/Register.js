import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.password) {
            // const requestOptions = {
            //     headers: { 'Content-Type': 'Access-Control-Allow-Origin' },
            //     body: JSON.stringify(user)
            // };
            console.log(user)
            axios.post('http://localhost:3600/register/', user).then(res => console.log(res.data))
        }
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register App</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            required
                            label="First Name"
                            margin="normal"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            label="Last Name"
                            margin="normal"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            label="Email"
                            margin="normal"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            label="Password"
                            margin="normal"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mt-3">
                        <Button variant="contained" type="submit" color="primary">Register </Button>
                    </div>
                </form>
            </div>
        );
    };
}
export default Register;