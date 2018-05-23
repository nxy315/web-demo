/**
 * Created by nxy on 2018/5/23.
 */
import React from 'react';
import { Router, BrowserRouter, HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import getComponent from '../components/common/getComponent'

const history = createBrowserHistory();

const routes = [
  {
    path: '/',
    exact: true,
    component: props => getComponent(props, () => import('../views/home/home'))
  },
  {
    path: '/list',
    exact: true,
    component: props => getComponent(props, () => import('../views/list/list'))
  },
  {
    path: '/signin',
    exact: true,
    component: props => getComponent(props, () => import('../views/signin/signin'))
  },
  {
    path: '/user-center',
    exact: true,
    component: props => getComponent(props, () => import('../views/userCenter/userCenter'))
  }
];

// let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const RouteConfig = (
    <Router history={history}>
      <Switch>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
        ))}
        <Redirect from="" to="/"/>
      </Switch>
    </Router>
);

export default RouteConfig;
