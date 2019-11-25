import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login App</h2>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            label="Email"
                            margin="normal"
                        />
                        <TextField
                            required
                            label="Password"
                            margin="normal"
                        />
                    </div>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </form>
            </div>
        );
    };
}
export default Login;