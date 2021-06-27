import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SocketContext from "./src/utils/socket.context";
//:: Components imports
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import Board from "./src/components/Board";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const container = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Board" component={Board} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
      setSocket(null);
    };
  }, []);

  return (
    <NavigationContainer>
      {socket ? (
        <SocketContext.Provider value={{ socket }}>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
            }}
          >
            <Tab.Screen name="Space" component={container} />
            {/*             <Tab.Screen name="Home" children={() => <Home socket={socket} />} /> */}
          </Tab.Navigator>
        </SocketContext.Provider>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
          }}
        >
          <Tab.Screen
            name="Login"
            children={() => <Login setSocket={setSocket} />}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
