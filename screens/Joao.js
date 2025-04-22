import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Joao() { 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Ana")}>
                <Text style={styles.text}>Clique e veja a Ana</Text>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/9d/a3/b1/9da3b1d5578f336390d6a8f6158543ff.jpg' }} />
                
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