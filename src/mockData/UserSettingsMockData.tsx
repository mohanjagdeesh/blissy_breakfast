import { IUserSettings } from "../interfaces/IUserSettings";

export const USER_SETTINGS_MOCK_DATA:IUserSettings[] = [
    {
        id:1,
        settingIconName:'face-man-profile',
        settingsTitle:'About me',
        leftArrow:true,
        navigateTo:'AboutMe'
    },
    {
        id:2,
        settingIconName:'google-maps',
        settingsTitle:'My Address',
        leftArrow:true,
        navigateTo:'Addresses',
    },
    {
        id:3,
        settingIconName:'currency-inr',
        settingsTitle:'Transactions',
        leftArrow:true,
        navigateTo:'Transactions'
    },
    {
        id:4,
        settingIconName:'bell-outline',
        settingsTitle:'Notifications',
        leftArrow:true,
        navigateTo:'Notifications'
    },
    {
        id:5,
        settingIconName:'logout',
        settingsTitle:'Sign out',
        leftArrow:false,
        navigateTo:'SignIn'
    },
];