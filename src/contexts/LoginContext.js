import React, { useState, createContext } from 'react';
import api from '../services/api';

export const LoginContext = createContext();

const LoginProvider = ( { children } ) => {
  const [id, setId] = useState(undefined);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [yieldReceived, setYieldReceived] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  
  const signIn = (email, password) => {
    const formData = {
      "email": email !== undefined ? email.toLowerCase() : undefined,
      "password": password,
    }

    api.post('auth', formData).then(response => {
      const { status, data } = response;

      switch(status) {
        case 201:
          const { id, firstName, lastName, token, yieldReceived } = data;

          api.defaults.headers.authorization = `Bearer ${token}`;

          setId(id);
          setFirstName(firstName);
          setLastName(lastName);
          setEmail(email);
          setYieldReceived(yieldReceived);
          
          break;
        case 203:
            if(Array.isArray(data)) {
              setErrorMessages(data);
            }
            else {
              setErrorMessages([data]);
            }

          break;
      }
    });
  }

  const signUp = (firstName, lastName, email, password, passwordConfirmation) => {
    const formData = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "passwordConfirmation": passwordConfirmation,
    }

    api.post('/users', formData).then(response => {
      const { status, data } = response;

      if(status === 201) {
        signIn(email, password);
      }

      if(status === 203) {
        if(Array.isArray(data)) {
          setErrorMessages(data);
        }
        else {
          setErrorMessages([data]);
        }
      }
    });
  }

  return (
    <LoginContext.Provider value={{
      id,
      firstName,
      lastName,
      email,
      yieldReceived,
      errorMessages,
      signIn,
      signUp,
    }}>
        { children }
    </LoginContext.Provider>
  )
}

export default LoginProvider;