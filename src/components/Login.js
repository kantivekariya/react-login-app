import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { user } = this.state;
        if (user.email && user.password) {
            console.log(user)
        }
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login App</h2>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
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
                        <Button variant="contained" type="submit" color="primary">Login </Button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    };
}
export default Login;