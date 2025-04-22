import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Isabel from "../screens/Isabel";
import Vitor from "../screens/Vitor";

const Stack = createNativeStackNavigator();

export default function IsabellaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Isabel" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Isabel" component={Isabel} />
            <Stack.Screen name="Pedro" component={Pedro} />
        </Stack.Navigator>
    );
}