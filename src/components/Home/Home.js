import React from "react";
import axios from 'axios';

// function getAll() {
//     return axios.get('http://localhost:3600/users/');
// }
class Home extends React.Component {
    constructor(props){
        super(props);
        this.getAll();
        // const res = getAll();
    }

    getAll(){
        axios.get('http://localhost:3600/users/').then((res)=>{
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    };
}
export default Home;