import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function toastify_error() {
    toast.error("🦄 Invalid Username & Password", {
        position: toast.POSITION.TOP_RIGHT
    });
}
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
            localStorage.setItem('user', JSON.stringify(user));
            axios.post('http://localhost:3600/login/', user).then((res) => {
                setTimeout(() => {
                    this.props.history.push('/home');
                }, 1000);
            }).catch(err => {
                toastify_error();
            });;
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Login</h2>
                    <ToastContainer />
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                required
                                label="Email"
                                margin="normal"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="text-box"
                            />
                            <TextField
                                required
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="text-box"
                            />
                        </div>
                        <div className="mt-3">
                            <Button variant="contained" type="submit" color="primary">Login </Button>
                            <Link to="/register" className="btn btn-link">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}
export default Login;