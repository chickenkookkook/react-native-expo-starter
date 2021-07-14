import React from "react";
import { useDispatch } from "react-redux";
import {
  Input,
  Box,
  VStack,
  Button,
  Container,
  Alert,
  Stack,
} from "native-base";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import userAction from "../../store/user/userActions";
import { style } from "styled-system";

const Login = () => {
  const dispatch = useDispatch();

  const [valueUsername, setValueUsername] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const login = () => {
    if (valueUsername != "" && valuePassword != "") {
      const data = {
        username: valueUsername,
        password: valuePassword,
      };
      dispatch({
        type: userAction.LOGIN_ACTION,
        payload: data,
      });
    } else {
      setShowAlert(true);
    }
  };

  const handleChangeUsername = (event) => setValueUsername(event.target.value);
  const handleChangePassword = (event) => setValuePassword(event.target.value);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {showAlert ? (
          <Stack space={4} mx={3} w="100%">
            <Alert variant="left-accent" status="warning">
              <Alert.Icon />
              <Alert.Title flexShrink={1}>
                Usrname และ Password ต้องไม่เป็นค่าวาง
              </Alert.Title>
            </Alert>
          </Stack>
        ) : null}
        <VStack space={4}>
          <View style={styles.containerLogo}>
            <Image
              source={require("../../assets/images/react.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Box>
            <Input
              size="md"
              w="100%"
              placeholder="usrname"
              value={valueUsername}
              onChange={handleChangeUsername}
            />
          </Box>
          <Box>
            <Input
              size="md"
              w="100%"
              type="password"
              placeholder="password"
              value={valuePassword}
              onChange={handleChangePassword}
            />
          </Box>
          <Box>
            <Button onPress={login}>LOGIN</Button>
          </Box>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
