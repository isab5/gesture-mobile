import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Isabel() { 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Vitor")}>
                <Text style={styles.text}>Clique e veja o Vitor</Text>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/1f/54/ac/1f54acbbecdfb5b248d42ace992b699b.jpg' }} />
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