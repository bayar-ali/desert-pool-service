import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./LoginButton.css"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            data-testid="login-button"
            className="btn-one"
            type="submit"
            style={{ width: '10%' }}
            onClick={() => loginWithRedirect()}>Log In</Button>
    );
};

export default LoginButton;