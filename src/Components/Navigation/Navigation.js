import React from 'react';
import './Navigation.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import * as routes from '../../Constants/routes'

const navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar className="Toolbar">
        <h3>Tyler Wells</h3>
        <div className="FlexSpacer"></div>
          <NavLink 
            exact
            className="Link" 
            to={routes.HOME}
            activeClassName="Active">Home
          </NavLink>
          <NavLink 
            exact
            className="Link" 
            to={routes.PROJECTS}
            activeClassName="Active">Projects
          </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default navigation;