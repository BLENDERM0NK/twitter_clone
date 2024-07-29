// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import HomeScreen from './src/screens/HomeScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import SpaceScreen from './src/screens/SpacesScreen';
// import MailScreen from './src/screens/MailScreen';
// import NotificationScreen from './src/screens/NotificationScreen';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName='home'
//         screenOptions={{
//           tabBarStyle: {
//             height: 75,
//             backgroundColor: "rgb(0,0,0)",
//             borderTopWidth: 1,
//             borderTopColor: "white"
//           },
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: "white",
//           headerStyle: {
//             backgroundColor: "black",
//             borderBottomColor: "",
//           }
//         }}


//       >
//         <Tab.Screen
//           name="home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="search"
//           component={SearchScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="search" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="space"
//           component={SpaceScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="microphone" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="notification"
//           component={NotificationScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome5 name="bell" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="mail"
//           component={MailScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="mail-outline" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SpaceScreen from './src/screens/SpacesScreen';
import MailScreen from './src/screens/MailScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarStyle: {
          height: 75,
          backgroundColor: "rgb(0,0,0)",
          borderTopWidth: 1,
          borderTopColor: "white"
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "",
        }
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="space"
        component={SpaceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="microphone" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="mail"
        component={MailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="mail-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
