import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Isabella';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return ( 
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerShown: true,
            headerTitle: "Página Inicial",
            headerStyle: {
                backgroundColor: "#991818",
                height: 100,
            },
            headerTintColor: "#f7f7f7",
            headerTitleStyle: {
                fontSize: 30,
                fontWeight: "bold",
                alignItems: "center",
            },
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: "#991818",
                borderRadius: 50,
                position: "absolute",
                height: 80,
                margin: 15,
            },
            tabBarLabelStyle: {
                fontSize: 15,
            },
            tabBarIconStyle: {
                marginTop: 15,
                marginBottom: 5,
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
        }}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: (color, size) => (
                <Ionicons name="home" size={size} color={color} />
            ),
            }}
            />
        </Tab.Navigator>
    );
}