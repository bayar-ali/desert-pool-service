import React from "react"; 
import ReactDOM from "react-dom"; 
import LogoutButton from './../LogoutButton';

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<LogoutButton></LogoutButton>, div)
})
