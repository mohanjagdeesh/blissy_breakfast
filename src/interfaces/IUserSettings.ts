import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "../navigations/StackNavigation";

export interface IUserSettings{
    id:number;
    settingIconName:string;
    settingsTitle:string;
    leftArrow:boolean;
    navigateTo:keyof RootStackParamList;
}