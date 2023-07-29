import React, { useEffect, useState } from "react";
import { StyleSheet,  View,FlatList } from "react-native";
import fetchApi from "../utils/fetch";
import Card from "./Card";

const ListCards =()=>{
    const [dataBreeds , setDataBreeds] = useState (null)
    
    useEffect(()=>{
        
        const breeds = async () => {
            try{
                const response=await fetchApi('breeds')
                setDataBreeds(response);
            }catch(error){
                console.error(error);
            }
        };

        breeds();
    },[]);
    return(
        <View >
            <FlatList
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            data={dataBreeds}
            renderItem={({item})=>(
                <Card {...item}/>
            )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        marginBottom:10
    }
    
});

export default ListCards;