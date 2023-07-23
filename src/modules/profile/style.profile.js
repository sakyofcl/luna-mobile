import {StyleSheet} from 'react-native';
import {COLOR} from '../../core/enum/color';

export const profileStyles = StyleSheet.create({
    profileScreen:{
        container: {
            flex: 1,
            backgroundColor: "#F6F9FF"
        },
        headerProfileCard:{
            width: "100%",
            height: "auto",
            display: 'flex',
            backgroundColor: "#fff",
            flexDirection: 'row',
            padding:10,
            borderRadius: 15
        },
        headerProfileCardWrapper:{
            backgroundColor: "#F6F9FF",
            padding:20
        },
        headerProfilePicBox:{
            width:100,
            height:100,
            borderRadius:50,
            backgroundColor: "#fff",
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        headerProfilePic:{
            width:"100%",
            height:"100%",
            borderRadius:50, 
        },
        headerProfileInfo:{
            paddingLeft:18
        },
        headerProfileTitle:{
            color:COLOR.onPrimary,
            fontWeight:"600",
            fontSize:16,
            marginBottom: 6
        },
        headerProfileSubTitle:{
            color: "#777777",
            fontWeight:"600",
            fontSize:13,
            marginRight:10
        },
        headerProfileStatus:{
            backgroundColor:COLOR.success,
            borderRadius:5,
            padding: 2,
            paddingLeft:5,
            paddingRight:5,
            display: 'flex',
            justifyContent: 'center',
            alignItems : "center",
            width:"auto"
        },
        headerProfileStatusText:{
            color:"#FFF",
            fontSize:10
        },
        editProfileButtonWrapper:{
            width:'auto',
            height:'auto',
            backgroundColor: "#F6F9FF",
            marginRight:5
        },
        editProfileButton:{
            height:40,
            width:"100%",
            backgroundColor: COLOR.brandColor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:15,
            flexDirection:'row'
        },
        editProfileButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
        headerProfileSubTitleWrapper:{
            flexDirection:'row',
            marginBottom: 10,
            alignItems:'center'
        },
        menuItemWrapper:{
            width:"100%",
            backgroundColor: "#FFF",
        },
        menuItem:{
            backgroundColor: "#FFF",
            width:"100%",
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            paddingTop:15,
            paddingBottom:15,
            justifyContent:'space-between'
        },
        menuSeperater:{
            height:1.5,
            width:'100%',
            backgroundColor :'#f2f2f2',
            marginBottom: 20,
            marginTop:20
        },
        menuIconWrapper:{
            flexDirection:'row',
            alignItems:'center',
            height:'100%',
            width:'auto'
        },
        menuIcon:{
            tintColor:"#2d2d2d",
            height:20,
            width:20,
            marginRight: 15
        },
        menuArrowIcon:{
            height:20,
            width:20,
            tintColor:"#2d2d2d",
        },
        menuLabel:{
            color: "#2d2d2d",
            fontSize:15
        },
        menuList:{
            width:'100%',
            height:'auto',
            backgroundColor: "#FFF",
        },
        menuListWrapper:{
            backgroundColor: "#F6F9FF",
            padding:20,
        },
        AppVersionInfo:{
            backgroundColor: "#F6F9FF",
            alignItems:'center'
        },
        AppVersionInfoText:{
            color: "#adadad",
            fontSize:13
        }
    }
});