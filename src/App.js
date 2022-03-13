import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import BusinessAdmin from './components/pages/BusinessAdmin'
import JobPosting from './components/pages/JobPosting'
import ThankYou from './components/pages/ThankYou'
import './App.css'
import logo from './assets/images/logo.jpg'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/business" component={ BusinessAdmin } />
                    <Route path="/jobpostings" component={ JobPosting } />
                    <Route path="/thankyou" component={ ThankYou } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <Container fluid className="footer">
             <Row>
                <p className="text-center" style={ FooterStyle }>#HackTN</p>
             </Row>
        </Container>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}