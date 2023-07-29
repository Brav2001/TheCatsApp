import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CatBreeds</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    }
});

export default Header;