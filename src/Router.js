import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Listings from './components/listings';
import Add from './components/add';
import Login from './components/login';
import Listing from './components/listing';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
  }

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/listings" component={Listings} />
            <ProtectedRoute exact path="/add" component={Add} />
            <ProtectedRoute path="/listing/:id" component={Listing} />
        </Switch>
    );
};

export default Router;