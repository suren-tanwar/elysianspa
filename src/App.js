import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch ,Router} from "react-router-dom";
import LandingHomePage from "./websiteFrontend/LandingHomePage"
import Services from "./websiteFrontend/Services"
import About from "./websiteFrontend/About"
import Contactus from "./websiteFrontend/Contactus"
import SignUp from "./websiteFrontend/SignUp"
import CustomerSignUp from "./websiteFrontend/CustomerSignUp"
import Login from "./websiteFrontend/Login"
import Gallery from "./websiteFrontend/Gallery"
import FootReflexology from "./components/FootReflexology"
import ThaiMassage from "./components/ThaiMassage"
import CoupleMassage from "./components/CoupleMassage"
import BalieneseMassage from "./components/BalieneseMassage"
import AromaTheraphyMassage from "./components/AromaTheraphyMassage"
import DeepTissueMassage from "./components/DeepTissueMassage"
import SwedishMassage from "./components/SwedishMassage"
import FullBodyMassage from "./components/FullBodyMassage"
import Testing from "./websiteFrontend/Testing"
import Footer from "./HandFooter/Footer"
// import Header from "./HandFooter/Header"
import UserPayments from "./management/UserPayments"
import OfficeExpense from "./management/OfficeExpense"
import UserBooking from "./management/UserBooking"
import UserVisit from "./management/UserVisit"
import DashBoard from "./management/DashBoard"
import SideDrawer from "./components/sideDrawer/sideDrawer"
import Header from "./components/header/Header"
import {ProtectedRoute} from "./components/sideDrawer/ProtectedRoute"

const hist = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <div>
    
      {/* <SideDrawer /> */}
      <Header />
      <Router history={hist}>
      <div>
    
      <Switch>
      <Route path="/" exact component= {LandingHomePage} />
      <Route path="/services"  component= {Services} />
      {/* <Route path="/header"  component= {Header} /> */}
      <Route path="/about"  component= {About} />
      <Route path="/contact-us"  component= {Contactus} />
     <Route path="/login"  component= {Login} />
     <Route path="/user-sign-up"  component= {CustomerSignUp} />
      <Route path="/gallery"  component= {Gallery} />
      <Route path="/foot-reflexology"  component= {FootReflexology} />
      <Route path="/balienese-massage"  component= {BalieneseMassage} />
      <Route path="/aroma-therapy-massage"  component= {AromaTheraphyMassage} />
      <Route path="/deep-tissue-massage"  component= {DeepTissueMassage} />
      <Route path="/full-body-massage"  component= {FullBodyMassage} />
      <Route path="/swedish-massage"  component= {SwedishMassage} />
      <Route path="/thai-massage"  component= {ThaiMassage} />
      <Route path="/couple-massage"  component= {CoupleMassage} />
      <Route path="/footer"  component= {Footer} />
      <ProtectedRoute path="/dashboard"  component= {DashBoard} />
      <ProtectedRoute path="/user-payment"  component= {UserPayments} />
      <ProtectedRoute path="/office-expense"  component= {OfficeExpense} />
      <ProtectedRoute path="/user-booking"  component= {UserBooking} />
      <ProtectedRoute path="/user-visit"  component= {UserVisit} />
      <ProtectedRoute path="/sign-up"  component= {SignUp} />
      <Route path="/testing"  component= {Testing} />
      </Switch>
      </div>  
      </Router>
      <Footer/>
  
      </div>
    )
  }
}

export default App
