import React from "react";
import "./Login.css";
import LoginForm from '../Components/LoginForm';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Login">
                <LoginForm/>
            </div>
        );
    }
}
 
export default Login;