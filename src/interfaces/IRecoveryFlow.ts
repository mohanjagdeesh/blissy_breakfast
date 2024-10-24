import { IAppButton } from "../components/button/Button";
import { IInputRendererProps } from "./ISignupForm";

export interface IRecoveryFlow{
    title:string;
    description:string;
    inputProps:IInputRendererProps
    recoveryButton:IAppButton;
}