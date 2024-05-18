import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from '../../pages/Home';
import AccountTab from '../../pages/Account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppNavigation() {

     function MyTabs() {
         return (
              <Tab.Navigator
                  screenOptions={{
                      tabBarActiveTintColor: '#e91e63'
                  }}>
                   <Tab.Screen
                      name="Home"
                      component={HomeTab}
                      options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                    
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                  />

                  <Tab.Screen
                      name="Account"
                      component={AccountTab}
                      options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                    
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                  />

                  <Tab.Screen
                      name="Product"
                      component={HomeTab}
                      options={{
                        tabBarLabel: 'Product',
                        tabBarIcon: ({ color, size }) => (
                    
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                  />
              </Tab.Navigator>
         );
     }


    function MyStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Tabs'component={MyTabs}/>
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MyStack>

            </MyStack>
        </NavigationContainer>
    )
}