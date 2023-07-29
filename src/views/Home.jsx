import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListCards from "../components/ListCards";

const Home =()=>{
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.listContainer}>
                <ListCards />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#082747"
    },
    listContainer:{
        flex:1,
        paddingHorizontal:16
    }
});

export default Home;