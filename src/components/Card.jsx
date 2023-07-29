import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import fetchApi from "../utils/fetch";

const Card = ({...props})=>{
    const [dataImage, setDataImage] = useState (null);
    
    
    useEffect(()=>{
        const images=async ()=>{
            try{
                const response = await fetchApi(`images/${props.reference_image_id}`);
                setDataImage(response);
            }catch(error){
                console.log(error);
                setDataImage(null)
            }
        }

        images();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <Image  source={dataImage != null ? dataImage.url ?{uri:dataImage.url}:require('../assets/200x200.png'):require('../assets/200x200.png')}  style={styles.image}/>
            <View style={styles.legendsContainer}>
                <View style={styles.leftLegendContainer}>
                    <Text style={styles.leftLegend}>{props.origin}</Text>
                </View>
                <View style={styles.rightLegendContainer}>
                    <Text style={styles.rightLegend}>Intelligence: {props.intelligence}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 12,
        backgroundColor:'#258bf3',
        marginBottom: 20,
        borderRadius:20,
        alignItems:'center'
    },
    titleContainer:{
        flex:1,
        width:'100%',
        alignItems:'flex-start',
        marginLeft:10,
    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        width: '100%',
        height: 300,
        borderRadius:20
    },
    legendsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    leftLegendContainer:{
        flex:1,
        alignItems:'flex-start'

    },
    rightLegendContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    leftLegend:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10

    },
    rightLegend:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginRight:10,
        marginTop:10
    }
});

export default Card