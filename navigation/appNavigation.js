import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/login/login";
import HomeScreen from "../screens/home/home";
import ListViewScreen from "../screens/listView/listView";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
};

const tabs = [
  {
    id: 1,
    title: "Home",
    component: HomeScreen,
    tabIcon: "home",
    activeTabIcon: require("../assets/images/home-selected.png"),
  },
  {
    id: 2,
    title: "ListView",
    component: ListViewScreen,
    tabIcon: "th-list",
    activeTabIcon: require("../assets/images/home-selected.png"),
  },
];

const AppNavigation = () => {
  let userAuthenticated = useSelector((state) => state.userReducer.username);

  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
          {tabs.map((tab) => (
            <Tab.Screen
              key={tab.id}
              name={tab.title}
              component={tab.component}
              options={{
                tabBarIcon: (icon) => (
                  <Icon
                    name={tab.tabIcon}
                    color="#00aced"
                    type="font-awesome"
                  />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
