import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ana from "../screens/Ana";
import Joao from "../screens/Joao";

const Stack = createNativeStackNavigator();

export default function IsabellaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Ana" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Ana" component={Ana} />
            <Stack.Screen name="Joao" component={Joao} />
        </Stack.Navigator>
    );
}