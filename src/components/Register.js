import React from "react";
import TextField from '@material-ui/core/TextField';

class Register extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register App</h2>
                <form>
                    <TextField
                        required
                        id="standard-required"
                        label="UserName"
                        defaultValue="Hello World"
                        margin="normal"
                    />
                </form>
            </div>
        );
    };
}
export default Register;