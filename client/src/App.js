
// components js files imported
import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./components/landingpage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./components/footer/Footer"
import Customer from "./components/pages/Customer";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ViewCustomer from "./components/pages/ViewCustomer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  // Setting this.state.customers to the cutomers db
  // state = {
  //   customers
  // };

  render() {
    return (
  
        <Router basename={process.env.PUBLIC_URL}>
         
          <NavBar />
          <Switch>
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/customer" component={Customer} />
            {/* <Route exact path="/customer" render={(props) => <Customer {...props} customers={this.state.customers} />} /> */}
            <Route exact path="/viewcustomer" component={ViewCustomer} />
            {/* <Route exact path="/contact" component={Contact} /> */}
          </Switch>
          {/* <LandingPage /> */}
          {/* <Footer /> */}
        </Router>
       
     
    );
  };
};
export default App;