import React from "react";
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home";
import CustomerQuery from "./customerQuery";
import Views from "./DateQuery";
import Viewcustomer from "./viewCustomer";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <div>
      <Router basename="/">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path="/customer-query" element={<PrivateRoute> <CustomerQuery /> </PrivateRoute>} />
            <Route path="/viewdate" element={<PrivateRoute> <Views /> </PrivateRoute>} />
            <Route path="/viewcustomer" element={<PrivateRoute> <Viewcustomer /> </PrivateRoute>} />
          <Route path="/forgotpw" element={ <ForgotPassword/> }/>
          </Routes>
        </AuthProvider>
      </Router>
      <footer />
    </div>
  );


}

export default App;