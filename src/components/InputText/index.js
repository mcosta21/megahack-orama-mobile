import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function InputText({ disabled, ...rest}) {
    
    const [focus, setFocus] = useState(false);
    return (
        <TextInput 
          {...rest}
          editable={disabled === true ? false : true}
          placeholderTextColor="#FFF"
          onFocus={() => setFocus(true)}
          style={styles.container} />
  );
}