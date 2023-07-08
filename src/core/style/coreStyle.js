import { Platform } from "react-native";

export const coreStyle = {
  coreBoxShadow: generateBoxShadowStyle()
};

function generateBoxShadowStyle(){
    const shadowColor = '#000000';
    if (Platform.OS === 'ios') {
      return {
        shadowColor: shadowColor,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity:0.2,
        shadowRadius:3,
      };
    } else if (Platform.OS === 'android') {
      return{
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8
      };
    }

};