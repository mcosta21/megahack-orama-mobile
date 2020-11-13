import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function InputText({ disabled, ...rest}) {   
    const [focus, setFocus] = useState(false);
    return (
        <TextInput 
          {...rest}
          editable={disabled === true ? false : true}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor="#FFF"
          style={focus ? {...styles.container, borderColor: '#34F683'} : styles.container} />
  );
}