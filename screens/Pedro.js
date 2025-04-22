import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pedro() { 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Isabella")}>
                <Text style={styles.text}>Clique e veja a Isabella</Text>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/e9/44/14/e94414565707cea3810596bfae1c4c87.jpg' }} />
                
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