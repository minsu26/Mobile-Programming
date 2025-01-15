import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({ value, placeholder, onChangeText, keyboardType }) => {
  return (
    <TextInput
      style={{
        width: 170,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        color: 'white',
      }}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="white" // placeholder 색상을 white로 설정
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default InputField;
