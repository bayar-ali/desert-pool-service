import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "../loginButton/LoginButton.css"

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            className="formatButton"
            variant="outline-light"
            type="submit"
            style={{ width: '10%' }}
            onClick={() => logout({ returnTo: window.location.origin, })}>
            Log Out
        </Button>
    );
};

export default LogoutButton;