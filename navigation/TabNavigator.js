import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IsabellaNavigator from './IsabellaNavigator';
import AnaNavigator from './AnaNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Isabella'
            screenOptions={{
                headerShown: true,
                headerTitle: "Casais Topzeira",
                headerStyle: {
                    backgroundColor: "#810e0b",
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
                    backgroundColor: "#f7f7f7",
                    borderRadius: 50,
                    position: "absolute",
                    height: 80,
                    margin: 15,
                    opacity: 0.7,
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
                name="Isabella"
                component={IsabellaNavigator}
                options={{
                    tabBarIcon: (color, size) => (
                        <Ionicons name="heart-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ana"
                component={AnaNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-sharp" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}