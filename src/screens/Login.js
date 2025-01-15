import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import CustomModal from "../components/CustomModal";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [savedName, setSavedName] = useState("");

  const handleLogin = () => {
    console.log(`로그인 시도: ${email} / ${password}`);
    if (isSignUpComplete) {
      if (email === savedEmail && password === savedPassword) {
        setModalVisible(true);
        setModalMessage("로그인 성공");
        navigation.navigate("MenuBar", {
        });
      } else {
        setModalVisible(true);
        setModalMessage("잘못 입력하셨습니다.");
      }
    } else {
      setModalVisible(true);
      setModalMessage("회원가입을 먼저 완료해주세요.");
    }
  };

  const handleSignUp = () => {
    console.log(`회원가입 시도: ${email} / ${password}`);
    setSavedEmail(email);
    setSavedPassword(password);
    setSavedName(name);
    setIsSignUpComplete(true);
    setModalVisible(true);
    setModalMessage(["회원가입이 완료되었습니다.", "로그인 페이지로 이동합니다."].join('\n'));
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {!isSignUpComplete && (
        <TextInput
          style={styles.input}
          placeholder="이름"
          onChangeText={setName}
          value={name}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      {!isSignUpComplete && (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      )}
      {isSignUpComplete && (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      )}
      <CustomModal
        isVisible={modalVisible}
        message={modalMessage}
        onClose={handleCloseModal}
      />
      <View style={styles.buttonSpace}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },
  input: {
    width: "80%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#0785F2",
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonSpace: {
    height: 15,
  },
});

export default Login;