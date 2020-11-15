import React, { useState, createContext } from 'react';
import api from '../services/api';

export const LoginContext = createContext();

const LoginProvider = ( { children } ) => {
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [yieldReceived, setYieldReceived] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);

  
  const signIn = async (email, password) => {
    const formData = {
      "email": email !== undefined ? email.toLowerCase() : undefined,
      "password": password,
    }

    await api.post('auth', formData).then(response => {
      const { status, data } = response;
      console.log(status);

      if(status * 1 === 203 * 1) {
        if(Array.isArray(data)) {
          setErrorMessages(data);
        }
        else {
          setErrorMessages([data]);
        }
      }

      else {
        const { id, firstName, lastName, token, yieldReceived } = data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        setId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setYieldReceived(yieldReceived);
        setErrorMessages([]);
      }
    });

    return false;
  };

  const signUp = async (firstName, lastName, email, password, passwordConfirmation) => {
    const formData = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "passwordConfirmation": passwordConfirmation,
    }

    await api.post('/users', formData).then(response => {
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