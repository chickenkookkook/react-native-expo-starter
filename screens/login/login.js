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
import userAction from "../../store/user/userActions";

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
    <Container>
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
    </Container>
  );
};

export default Login;
