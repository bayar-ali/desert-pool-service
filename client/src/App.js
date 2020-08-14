
// components js files imported
import React from "react";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./components/landingpage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./components/footer/Footer"
import Customer from "./components/pages/Customer";
import ViewCustomer from "./components/pages/ViewCustomer";
import AddCustomer from "./components/pages/AddCustomer";
import NoMatch from "./components/pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
  // Setting this.state.customers to the cutomers db
  // state = {
  //   customers
  // };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/customers" component={Customer} />
        {/* <Route exact path="/customer" render={(props) => <Customer {...props} customers={this.state.customers} />} /> */}
        <Route exact path="/viewcustomer/:id" component={ViewCustomer} />
        <Route exact path="/addcustomer" component={AddCustomer} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;