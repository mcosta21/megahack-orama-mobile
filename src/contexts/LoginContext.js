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
    setErrorMessages([]);
    let result;

    const formData = {
      "email": email !== undefined ? email.toLowerCase() : undefined,
      "password": password,
    }

    await api.post('auth', formData).then(response => {
      const { status, data } = response;

      if(status === 203) {
        if(Array.isArray(data)) {
          setErrorMessages(data);
          result = data;
        }
        else {
          setErrorMessages([data]);
          result = [data];
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

        result = false;
      }
    });

    return result;
  };

  const signUp = (firstName, lastName, email, password, passwordConfirmation) => {
    setErrorMessages([]);
    const formData = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "passwordConfirmation": passwordConfirmation,
      "yieldReceived": 0
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
      setFirstName,
      lastName,
      setLastName,
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