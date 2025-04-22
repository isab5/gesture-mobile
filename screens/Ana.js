import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Ana() { 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Joao")}>
                <Text style={styles.text}>Clique e veja o João</Text>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/01/78/a3/0178a3db74fc0356070921dddfcc251a.jpg' }} />
                
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#febea3",
    },
    text: {
        fontSize: 20,
        color: "#030303",
        textAlign: "center",
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 100,
        marginTop: 20,
    },
});