import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Listings from './containers/listings';
import Add from './containers/add';
import Login from './containers/login';
import Listing from './containers/listing';

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
            <Route default exact path="/listings" component={Listings} />
            <ProtectedRoute exact path="/add" component={Add} />
            <Route path="/place/:id" component={Listing} />
        </Switch>
    );
};

export default Router;