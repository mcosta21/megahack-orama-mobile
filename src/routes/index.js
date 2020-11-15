import React, { useContext } from 'react';

import { LoginContext } from '../contexts/LoginContext';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const { id } = useContext(LoginContext);
  
  return (
    <>
      {
        id === null?
          <AuthStack />
          : 
          <AppStack />
      }
    </>
  )
}

export default Routes;