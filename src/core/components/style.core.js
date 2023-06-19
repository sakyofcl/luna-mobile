import { StyleSheet } from "react-native";

export const coreStyles = StyleSheet.create({
    bottomNav:{
        container:{
            height:60,
            width:"100%",
            backgroundColor:"#fff",
            display:"flex",
            flexDirection:"row",
            borderTopWidth: 1,
            borderColor: "#eaeaea"
        },
        navItem:{
            width:"25%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }
    }
});