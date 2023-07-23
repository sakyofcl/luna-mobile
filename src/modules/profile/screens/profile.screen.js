import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { profileStyles } from '../style.profile';
import profileImage from '../../../assets/image/profile.jpg';
import ArrowIcon from '../../../assets/image/angle-small-right.png';
import DoctorIcon from '../../../assets/image/doctor.png';
import ConsultingUnitIcon from '../../../assets/image/pulse-icon.png';
import PharmacyIcon from '../../../assets/image/medicine.png';
import PharmacistIcon from '../../../assets/image/account.png';
import LogoutIcon from '../../../assets/image/logout.png';
import { COLOR } from '../../../core/enum/color';

export const ProfileScreen = (props)=>{
    const profileScreenStyle = profileStyles.profileScreen;
    const onMenuClick = (to)=>{
        props.navigation.navigate('profile', {screen: to});
    }
    
    return (
        <ScrollView style={profileScreenStyle.container}>

            <View style={profileScreenStyle.headerProfileCardWrapper}>
                <View style={profileScreenStyle.headerProfileCard}>
                    <View style={profileScreenStyle.headerProfilePicBox}>
                        <Image source={profileImage} style={profileScreenStyle.headerProfilePic}/>
                    </View>
                    <View style={profileScreenStyle.headerProfileInfo}>
                        <Text style={profileScreenStyle.headerProfileTitle}>Mohamed Sakeen</Text>
                        <View style={profileScreenStyle.headerProfileSubTitleWrapper}>
                            <Text style={profileScreenStyle.headerProfileSubTitle}>Doctor</Text>
                            <View style={profileScreenStyle.headerProfileStatus}>
                                <Text style={profileScreenStyle.headerProfileStatusText}>Active</Text>
                            </View>
                        </View>
                        <View style={profileScreenStyle.editProfileButtonWrapper}>
                            <TouchableOpacity style={profileScreenStyle.editProfileButton}> 
                                <Text style={profileScreenStyle.editProfileButtonFont}>
                                    Edit Profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={profileScreenStyle.menuListWrapper}>
                <View style={profileScreenStyle.menuList}>
                    <MenuItem icon={DoctorIcon} label="Doctor" onClick={()=> onMenuClick('doctor')}/>
                    <MenuItem icon={ConsultingUnitIcon} label="Consulting Unit" onClick={()=> onMenuClick('unit')}/>
                    <MenuItem icon={PharmacyIcon} label="Pharmacy" onClick={()=> onMenuClick('pharmacy')}/>
                    <MenuItem icon={PharmacistIcon} label="Pharmacist" onClick={()=> onMenuClick('pharmacist')}/>
                    <View style={profileScreenStyle.menuSeperater}/>
                    <MenuItem icon={LogoutIcon} label="Log out" Iconcolor={{tintColor: COLOR.danger}}/>
                </View>
            </View>

            <View style={profileScreenStyle.AppVersionInfo}>
                <Text style={profileScreenStyle.AppVersionInfoText}>App version 1.0.2</Text>
            </View>

        </ScrollView>
    );
};


const MenuItem = (props)=>{
    const profileScreenStyle = profileStyles.profileScreen;

    return (
        <TouchableNativeFeedback onPress={props.onClick} background={TouchableNativeFeedback.Ripple("#cecece")} style={profileScreenStyle.menuItemWrapper}>
            <View style={profileScreenStyle.menuItem}> 
                <View style={profileScreenStyle.menuIconWrapper}>
                    <Image source={props.icon} style={{...profileScreenStyle.menuIcon, ...props.Iconcolor}}/>
                    <Text style={profileScreenStyle.menuLabel} >{props.label}</Text>
                </View>
                <Image source={ArrowIcon} style={profileScreenStyle.menuArrowIcon}/>
            </View>
        </TouchableNativeFeedback>
    );
}