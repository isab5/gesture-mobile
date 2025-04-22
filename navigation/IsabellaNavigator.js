import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Isabella from "../screens/Isabella";
import Pedro from "../screens/Pedro";

const Stack = createNativeStackNavigator();

export default function IsabellaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Isabella" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Isabella" component={Isabella} />
            <Stack.Screen name="Pedro" component={Pedro} />
        </Stack.Navigator>
    );
}