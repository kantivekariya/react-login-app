import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phoneno: '',
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
            axios.post('http://localhost:3600/register/', user).then(res => console.log(res.data))
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                required
                                label="First Name"
                                margin="normal"
                                name="firstName"
                                value={this.state.firstName}
                                className="text-box"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                label="Last Name"
                                margin="normal"
                                name="lastName"
                                value={this.state.lastName}
                                className="text-box"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                label="Phone No"
                                margin="normal"
                                name="phoneno"
                                value={this.state.phoneno}
                                className="text-box"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                label="Email"
                                margin="normal"
                                name="email"
                                value={this.state.email}
                                className="text-box"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                value={this.state.password}
                                className="text-box"
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="pt-4 ">
                            <Button variant="contained" type="submit" color="primary">Register</Button>
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}
export default Register;