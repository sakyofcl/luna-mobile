import { Alert } from "react-native";

export function showAlert(title="", message="", onOk, onCancel=()=>{}){
    const button = [...(!onCancel ? [{}] : [{text:'CANCEL', onPress: onCancel}]), ...(!onOk ? [{}] : [{text:'OK', onPress: onOk}]) ];
    Alert.alert(title, message, button);
} 