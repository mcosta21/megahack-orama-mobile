import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function InputText({ disabled, isBlack, height, ...rest}) {   
    const [focus, setFocus] = useState(false);

    let theme = {}

    if(isBlack === true){
      theme = {
        backgroundColor: '#182024'
      }
    }

    if(height !== undefined){
      theme = {
        ...theme,
        height: height
      }
    }
    
    const styleOnFocus = {
      ...styles.container, 
      borderColor: '#34F683',
      ...theme
    }

    const styleOnFocusOut = {
      ...styles.container,
      ...theme
    }
    return (
        <TextInput 
          {...rest}
          editable={disabled === true ? false : true}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor="#6C7884"
          style={focus ? styleOnFocus : styleOnFocusOut} />
  );
}