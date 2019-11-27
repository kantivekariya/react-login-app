import React from "react";
import { authenticationService } from '../../shared/_services/_services'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };

    }
    componentDidMount() {
        authenticationService.getAll().then((users) => {
            this.setState({ users })
            console.log(this.state.currentUser)
        });
    }
    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user._id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                }
            </div>
        );
    };
}


export default Home;