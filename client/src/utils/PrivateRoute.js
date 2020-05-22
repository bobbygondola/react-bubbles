import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//private route rules
//1. it has to have the same API as <Route /> -yes
//2. it renders a <Route /> and passes all the props through it -yes but broke it with step 3
//3.it checks if the user is authenticate, if they are, it renders the component prop, if not, reidrects to /login - yes

const PrivateRoute = ({component: Component, ...rest}) => {
return (
    <Route {...rest} render={() => {
      const token = localStorage.getItem('token');
        if (token) {
          //render component
            return <Component />
          } else {
            //redrect to login
            return <Redirect to="/login" />
            }
    }} />
  )
}
export default PrivateRoute;