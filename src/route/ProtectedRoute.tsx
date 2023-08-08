import {Navigate} from "react-router-dom";

export interface AuthProps {
    children: JSX.Element
}

export default function NeedAuth(props: AuthProps) {
    if (sessionStorage.token) {
        return props.children
    } else {
        return <Navigate to={"/sign-in"}/>
    }
}