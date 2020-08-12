import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from '@testing-library/react'
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

afterEach(cleanup)
 
it('should take a snapshot', () => {
   const { asFragment } = render(<App />)
   
   expect(asFragment(<App />)).toMatchSnapshot()
  })
